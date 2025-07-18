import { SiteLayout } from "@/components/layout/site-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllProjects, getProjectById } from "@/lib/projects";
import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 动态生成页面元数据
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById((await params).id);
  
  if (!project) {
    return {
      title: '项目不存在',
    };
  }
  
  return {
    title: `${project.title} | 我的项目`,
    description: project.description,
  };
}

// 生成静态路径
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    notFound();
  }
  
  // 获取项目图片 - 暂时注释掉未使用的函数
  // const images = getProjectImages(params.id);
  
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/projects" className="flex items-center gap-2">
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
              返回项目列表
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
        
        {/* 项目封面图 - 使用占位符 */}
        <div className="mb-8 relative rounded-lg overflow-hidden h-[300px] md:h-[400px] bg-muted flex items-center justify-center">
          <p className="text-muted-foreground text-xl">{project.title} - 项目展示</p>
        </div>
        
        {/* 项目详情 */}
        <div className="prose prose-stone dark:prose-invert max-w-none mb-8">
          <h2>项目概述</h2>
          <p>{project.longDescription}</p>
          
          {/* 项目链接 */}
          <div className="flex flex-wrap gap-4 my-8 not-prose">
            {project.demoUrl && (
              <Button asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  查看演示
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  查看源代码
                </Link>
              </Button>
            )}
          </div>
          
          {/* 项目图片展示 - 如果没有图片，显示占位符 */}
          <h2>项目截图</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-[200px] bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">截图 {index}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <Button variant="outline" asChild>
            <Link href="/projects">
              返回项目列表
            </Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
} 