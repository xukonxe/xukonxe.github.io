"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function CommunityHub() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "订阅失败，请稍后再试。");
      }

      setMessage("感谢订阅！我们已向您发送了一封确认邮件。");
      setEmail('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("发生了一个未知的错误。");
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="community" className="py-10 md:py-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">加入我的社群网络</h2>
            <p className="text-muted-foreground mt-4">
                选择最适合你的方式，与我建立连接，获取独家内容、参与深度讨论，共同探索个体与网络的边界。
            </p>
        </div>
        <Tabs defaultValue="newsletter" className="max-w-xl mx-auto mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="newsletter">邮件通讯</TabsTrigger>
            <TabsTrigger value="qq">QQ 频道</TabsTrigger>
            <TabsTrigger value="wechat">加我微信</TabsTrigger>
          </TabsList>
          <TabsContent value="newsletter">
            <Card>
              <CardHeader>
                <CardTitle>邮件通讯</CardTitle>
                <CardDescription>
                  订阅我的 Newsletter，定期接收深度思考、精选资源和不公开发布的内容。承诺无广告，随时可退订。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="email">邮箱地址</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="elon.musk@tesla.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? '正在订阅...' : '立即订阅'}
                    </Button>
                </form>
                {message && <p className="text-sm text-muted-foreground mt-4">{message}</p>}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="qq">
            <Card>
                <CardHeader>
                    <CardTitle>QQ 频道</CardTitle>
                    <CardDescription>
                        加入我的 QQ 频道，参与日常交流、思想碰撞和即时分享。这是一个更开放、更随意的网络节点。
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>点击下方按钮或扫描二维码，加入我的 QQ 频道。</p>
                    {/* TODO: 替换为真实的频道链接和二维码 */}
                    <Button asChild>
                        <a href="#" target="_blank">点击加入</a>
                    </Button>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wechat">
            <Card>
                <CardHeader>
                    <CardTitle>加我微信</CardTitle>
                    <CardDescription>
                        添加我的个人微信，以建立更深度、更直接的强连接。这是我们进行一对一交流的通道。
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="font-semibold">请务必备注：<span className="text-primary">来自博客</span></p>
                    <p>这是我们之间的筛选暗号，便于我快速通过您的好友请求。</p>
                    {/* TODO: 替换为真实的微信号或微信二维码图片 */}
                    <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto">
                        <p className="text-sm text-muted-foreground">[ 微信二维码 ]</p>
                    </div>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 