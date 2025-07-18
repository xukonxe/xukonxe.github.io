import { SiteLayout } from "@/components/layout/site-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  // 获取所有项目数据
  const projects = getAllProjects();

  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">项目</h1>
          <p className="text-xl text-muted-foreground">
            我参与开发的一些精选项目和个人作品
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center relative">
                {/* 使用占位符替代图片 */}
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">{project.title}</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">{project.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies && project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <Button asChild variant="default">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        查看演示
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        查看代码
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 没有项目时显示 */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">暂无项目</p>
          </div>
        )}
      </div>
    </SiteLayout>
  );
} 