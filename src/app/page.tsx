import { CommunityHub } from "@/components/community-hub";
import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <SiteLayout>
      {/* 英雄区 */}
      <section className="py-20 md:py-32 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            探索个体与网络的力量<br className="hidden md:block" />构建有价值的连接
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
            我致力于研究和实践个人能力的提升与人际网络的构建。在这里，我分享我的思考、工具与项目，希望能与同样追求卓越的你，共同成长。
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/about">了解我的理念</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">阅读精选文章</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 社群中心 */}
      <CommunityHub />
      
      {/* TODO: 其他内容模块，如最新文章、精选项目等 */}
    </SiteLayout>
  );
}
