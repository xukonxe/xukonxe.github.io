import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// 初始工具箱数据
const toolboxItems = [
  {
    category: '代码片段',
    title: 'React Hook: useDebounce',
    description: '一个自定义的 React Hook，用于对函数执行进行防抖处理，有效提升性能和用户体验。',
    link: '#', // 替换为Gist或其他链接
    linkText: '查看代码',
  },
  {
    category: '工具推荐',
    title: 'FigJam - 在线白板',
    description: 'Figma 出品的在线协作白板工具，非常适合用于头脑风暴、流程图绘制和团队协作。',
    link: 'https://www.figma.com/figjam/',
    linkText: '访问官网',
  },
  {
    category: '精选书单',
    title: '《影响力》 - Robert Cialdini',
    description: '社会心理学的经典之作，深入剖析了说服他人的六大原则，是理解人际互动的必读之书。',
    link: '#', // 替换为豆瓣读书或其他链接
    linkText: '了解更多',
  },
];

export default function ToolboxPage() {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">工具箱</h1>
          <p className="text-xl text-muted-foreground">
            这里是我沉淀的代码片段、效率工具、精选书单等资源，希望能为你赋能。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolboxItems.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <CardHeader>
                <CardDescription>{item.category}</CardDescription>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={item.link} target="_blank" className="flex items-center justify-center gap-2">
                    {item.linkText}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
} 