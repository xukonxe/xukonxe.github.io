import Link from "next/link";
import { SiteLayout } from "@/components/layout/site-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getAllTags, getSeriesData } from "@/lib/blog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// 获取博客文章数据
export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const seriesData = getSeriesData();
  const seriesNames = Object.keys(seriesData);

  // 找出所有在系列中的文章的ID
  const postsInSeries = new Set(Object.values(seriesData).flat().map(p => p.id));
  // 筛选出不属于任何系列的文章
  const standalonePosts = posts.filter(p => !postsInSeries.has(p.id));

  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">博客</h1>
          <p className="text-xl text-muted-foreground">
            分享我对前端开发、设计和技术的见解与经验
          </p>
        </div>

        {/* 标签筛选 */}
        {tags.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">按标签筛选</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {/* 系列文章 */}
        {seriesNames.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">系列文章</h2>
            <Accordion type="single" collapsible className="w-full">
              {seriesNames.map((seriesName) => (
                <AccordionItem value={seriesName} key={seriesName}>
                  <AccordionTrigger className="text-xl font-semibold">
                    {seriesName}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {seriesData[seriesName].map((post) => (
                        <Card key={post.id} className="flex flex-col">
                          <CardHeader>
                            <CardTitle className="hover:text-primary transition-colors">
                              <Link href={`/blog/${post.id}`} className="block">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription>{post.date}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{post.description}</p>
                          </CardContent>
                          <CardFooter>
                            <div className="flex flex-wrap gap-2">
                              {post.tags && post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                              ))}
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
        
        {/* 独立文章 */}
        {standalonePosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4 border-t pt-8">其他文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standalonePosts.map((post) => (
                <Card key={post.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`} className="block">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {post.tags && post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 没有文章时显示 */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">暂无博客文章</p>
          </div>
        )}
      </div>
    </SiteLayout>
  );
} 