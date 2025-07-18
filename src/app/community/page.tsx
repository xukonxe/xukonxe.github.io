import { CommunityHub } from "@/components/community-hub";
import { SiteLayout } from "@/components/layout/site-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const constitution = [
    {
        title: "价值交换",
        description: "我们相信，有价值的关系建立在双向赋能之上。在这里，我们鼓励分享、提问和互助，共同成长。"
    },
    {
        title: "深度思考",
        description: "我们拒绝浮躁和浅薄。我们推崇经过独立思考的、有深度的、结构化的讨论。"
    },
    {
        title: "真实连接",
        description: "我们鼓励成员在专业领域之外，建立真诚、可信赖的人际关系网络。"
    },
];

const highlights = [
    {
        title: "[深度] 如何量化个人能力的价值？",
        description: "摘自第3期邮件通讯：一个将个人技能、项目经验和市场需求相结合的量化评估模型探讨...",
        link: "#"
    },
    {
        title: "[讨论] 你如何定义“高价值信息”？",
        description: "来自QQ频道的精彩讨论：关于信息筛选、噪声过滤和构建个人知识体系的思考碰撞...",
        link: "#"
    },
    {
        title: "[资源] 个人项目出海收款方案汇总",
        description: "社群成员分享：对比分析Stripe, Lemon Squeezy等多个平台的优劣势和适用场景...",
        link: "#"
    }
]

export default function CommunityPage() {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">社群广场</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            一个围绕“个体能力”与“网络价值”构建的实践者社群。在这里，我们共同思考、连接、创造价值。
          </p>
        </div>

        {/* 社群宪法 */}
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">我们的宪法</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {constitution.map((rule) => (
                    <Card key={rule.title}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                            <CardTitle>{rule.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{rule.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        
        {/* 社群入口 */}
        <section className="mb-12">
          <CommunityHub />
        </section>

        {/* 往期精选 */}
        <section className="mb-12 pt-12 border-t">
            <h2 className="text-3xl font-bold text-center mb-8">往期价值沉淀</h2>
            <div className="space-y-4">
                {highlights.map((item) => (
                    <Card key={item.title} className="hover:border-primary transition-colors">
                        <CardHeader>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                            {/* 可以添加一个查看详情的链接 */}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

      </div>
    </SiteLayout>
  );
} 