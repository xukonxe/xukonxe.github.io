import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import * as cheerio from 'cheerio';
import { cache } from 'react';

// 博客文章目录路径
const postsDirectory = path.join(process.cwd(), 'content/blog');

// 获取所有博客文章的元数据
export function getAllPosts() {
  // 获取 /content/blog 目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  
  // 获取每个文件的数据
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // 只处理 .md 文件
    .map(fileName => {
      // 移除 ".md" 后缀，得到 id
      const id = fileName.replace(/\.md$/, '');
      
      // 读取 markdown 文件内容
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // 使用 gray-matter 解析文章元数据
      const matterResult = matter(fileContents);
      
      // 合并数据
      return {
        id,
        ...(matterResult.data as { 
          title: string; 
          date: string; 
          tags: string[];
          description: string;
          series?: string; // series 是可选的
        }),
      };
    });
  
  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取所有博客文章的 id
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map(fileName => {
    return {
      id: fileName.replace(/\.md$/, '')
    };
  });
}

// 根据 id 获取博客文章数据
export const getPostData = cache(async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // 使用 gray-matter 解析文章元数据
  const matterResult = matter(fileContents);
  
  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 使用 cheerio 提取标题并添加 id
  const $ = cheerio.load(contentHtml);
  const headings: { level: number; text: string; id: string }[] = [];
  $('h2, h3').each((i, el) => {
    if ('tagName' in el) {
      const element = $(el);
      const text = element.text();
      const level = parseInt(el.tagName.substring(1));
      const baseId = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      const id = `${baseId}-${i}`; // 附加索引 i 保证唯一性
      element.attr('id', id);
      headings.push({ level, text, id });
    }
  });
  
  // 合并数据
  return {
    id,
    contentHtml: $.html(), // 返回修改后的 HTML
    headings,
    ...(matterResult.data as { 
      title: string; 
      date: string; 
      tags: string[];
      description: string;
      series?: string; // series 是可选的
    }),
  };
});

// 获取所有系列以及系列下的文章
export function getSeriesData() {
  const allPosts = getAllPosts();
  const series: Record<string, typeof allPosts> = {};

  allPosts.forEach(post => {
    if (post.series) {
      if (!series[post.series]) {
        series[post.series] = [];
      }
      series[post.series].push(post);
    }
  });

  return series;
}


// 获取所有标签
export function getAllTags() {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet);
} 