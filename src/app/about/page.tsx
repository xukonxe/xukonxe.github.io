import { SiteLayout } from "@/components/layout/site-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto">
        {/* 个人介绍区 - 重构为理念宣言 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
          {/* 头像区 */}
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
              {/* 如果有头像，可以替换下面的占位符 */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              {/* 
              <Image 
                src="/images/avatar.jpg" 
                alt="个人头像" 
                fill 
                className="object-cover" 
                priority 
              />
              */}
            </div>
            
            {/* 社交链接 */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
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
                    className="mr-2"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
                    className="mr-2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 9-5.8 1.6 1 3 2.4 4 4z" />
                  </svg>
                  Twitter
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                    className="mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          
          {/* 理念宣言 */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold tracking-tight mb-6">我的理念：构建价值网络</h1>
            <div className="prose prose-stone dark:prose-invert max-w-none text-lg md:text-xl">
              <p>
                我相信，每个人的核心价值，不仅在于掌握多少孤立的技能，更在于如何将这些能力体系化、产品化，并构建一个能持续产生价值的网络。
              </p>
              <p>
                本网站不只是我的数字名片，更是我关于“个体能力”与“网络价值”思想的线上实践场。我在这里分享我的思考、展示我的实践，旨在吸引、连接并赋能与我同频的探索者。
              </p>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href="mailto:your-email@example.com">
                  联系我
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  阅读我的博客
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* 理念的实践 */}
        <section className="mb-12 pt-12 border-t">
            <h2 className="text-3xl font-bold text-center mb-6">理念的实践</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                我的所有技能、项目和经历，都是为了佐证我核心理念的有效性。它们是我将思想转化为现实价值的证明。
            </p>

            {/* 技能标签页 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">技能 & 专长</h3>
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="frontend">前端开发</TabsTrigger>
                  <TabsTrigger value="backend">后端技术</TabsTrigger>
                  <TabsTrigger value="tools">工具 & 方法</TabsTrigger>
                  <TabsTrigger value="other">其他技能</TabsTrigger>
                </TabsList>
                
                <TabsContent value="frontend" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Vue', 'Tailwind CSS', 'CSS3', 'HTML5', 'JavaScript'].map((skill) => (
                      <Card key={skill} className="bg-muted/40">
                        <CardContent className="p-4 flex items-center justify-center">
                          <span>{skill}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="backend" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {['Node.js', 'Express', 'MongoDB', 'GraphQL', 'RESTful API', 'SQL', 'Firebase'].map((skill) => (
                      <Card key={skill} className="bg-muted/40">
                        <CardContent className="p-4 flex items-center justify-center">
                          <span>{skill}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="tools" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {['Git', 'GitHub', 'VS Code', 'Figma', 'Jest', 'CI/CD', 'Docker', 'Webpack'].map((skill) => (
                      <Card key={skill} className="bg-muted/40">
                        <CardContent className="p-4 flex items-center justify-center">
                          <span>{skill}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="other" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {['UI/UX 设计', '性能优化', '技术写作', '项目管理', '响应式设计', '可访问性'].map((skill) => (
                      <Card key={skill} className="bg-muted/40">
                        <CardContent className="p-4 flex items-center justify-center">
                          <span>{skill}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
        
            {/* 工作经历 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">工作经历</h3>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>高级前端开发工程师 @ 科技公司</CardTitle>
                      <Badge variant="outline">2021年至今</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>负责公司核心产品的前端架构和开发</li>
                      <li>优化应用性能，使加载时间减少 40%</li>
                      <li>指导初级开发人员并推广最佳实践</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>前端开发工程师 @ 创业公司</CardTitle>
                      <Badge variant="outline">2018 - 2021</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>使用 React 和 TypeScript 构建可扩展的前端应用</li>
                      <li>与设计和后端团队协作，确保无缝的用户体验</li>
                      <li>实施自动化测试，提高代码质量和可靠性</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
        
            {/* 教育背景 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">教育背景</h3>
              
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle>计算机科学学士</CardTitle>
                    <Badge variant="outline">某大学 • 2014 - 2018</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>主修计算机科学，辅修设计。在校期间参与多个开源项目，并获得优秀毕业生称号。</p>
                </CardContent>
              </Card>
            </div>
        </section>

        {/* 思想的来源 */}
        <section className="mb-12 pt-12 border-t">
            <h2 className="text-3xl font-bold text-center mb-6">思想的来源</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                我的思想并非凭空而来，而是站在巨人的肩膀上。以下是深刻影响了我的一些书籍、人物或观念。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>《原则》</CardTitle>
                        <CardDescription>瑞·达利欧</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            教会我如何通过系统化的方式进行决策，并拥抱极度透明和极度真实。
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Paul Graham 的文章</CardTitle>
                        <CardDescription>Y Combinator 创始人</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            他关于创业、技术和写作的深刻洞见，为我提供了宝贵的思维模型。
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>我最近在思考的问题</CardTitle>
                        <CardDescription>拥抱不完美</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            在个人价值最大化的道路上，如何平衡“系统效率”与“人之常情”？这是我当前探索的议题。
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </SiteLayout>
  );
} 