import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

// 添加这一行以支持静态导出
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 假设您的网站域名是 'https://example.com'
  // 部署前请务必修改为您的真实域名
  const baseUrl = 'https://xukonxe.github.io'; 

  // 获取所有博客文章
  const posts = getAllPosts();
  const postUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(), // 您可以将这里替换为文章的真实更新日期 post.date
  }));

  // 其他静态页面
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/community`, lastModified: new Date() },
    { url: `${baseUrl}/toolbox`, lastModified: new Date() },
  ];

  return [...staticUrls, ...postUrls];
} 