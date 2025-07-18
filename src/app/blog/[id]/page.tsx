import { SiteLayout } from "@/components/layout/site-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPostIds, getPostData, getSeriesData } from "@/lib/blog";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CommunityHub } from "@/components/community-hub";
import { Toc } from "@/components/toc";
import { Comments } from "@/components/comments";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// 生成每个文章页面的元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData((await params).id);
  const globalKeywords = ['前端开发', '人际关系', '网络理论', '个人成长', '技术博客'];
  
  return {
    title: postData.title,
    description: postData.description,
    keywords: [...(postData.tags || []), ...globalKeywords],
  };
}


// 生成静态页面的路径参数
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const paths = getAllPostIds();
  return paths;
}

// 博客文章详情页面
export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const postData = await getPostData(id);
  const allSeriesData = getSeriesData();
  const seriesPosts = postData.series ? allSeriesData[postData.series] : [];

  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto flex items-start gap-12">
        {/* 文章主要内容 */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/blog" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                返回博客列表
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {postData.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 mb-8">
              <div className="text-muted-foreground">
                {postData.date}
              </div>
              <div className="flex flex-wrap gap-2">
                {postData.tags && postData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>

          {/* 如果文章属于一个系列，则显示系列文章列表 */}
          {postData.series && seriesPosts.length > 0 && (
            <div className="mt-12 pt-6 border-t">
              <Card>
                <CardHeader>
                  <CardTitle>系列文章：{postData.series}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {seriesPosts.map((post) => (
                      <li key={post.id} className="list-none">
                        <Link 
                          href={`/blog/${post.id}`} 
                          className={`block p-2 rounded-md transition-colors ${
                            post.id === id 
                              ? 'bg-muted font-semibold' 
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="mt-12 pt-6 border-t">
            <Button variant="outline" asChild>
              <Link href="/blog">
                返回博客列表
              </Link>
            </Button>
          </div>

          {/* 文章末尾的社群转化模块 */}
          <div className="mt-12 pt-12 border-t">
            <CommunityHub />
          </div>

          {/* 评论区 */}
          <div className="mt-12 pt-12 border-t">
              <h2 className="text-2xl font-bold mb-6">评论与交流</h2>
              <Comments />
          </div>
        </div>

        {/* 浮动目录 */}
        <aside className="w-64 flex-shrink-0">
          <Toc headings={postData.headings} />
        </aside>
      </div>
    </SiteLayout>
  );
} 