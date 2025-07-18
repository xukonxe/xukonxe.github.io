---
title: '使用 Next.js, Tailwind CSS 和 Shadcn UI 从零到一打造现代化博客'
date: '2023-10-26'
summary: '本文将手把手教你如何利用 Next.js 13 的 App Router、Tailwind CSS 以及 Headless 组件库 Shadcn UI，快速搭建一个功能完备、高度可定制的现代化个人博客网站。'
series: '人际关系网络七讲'
---

# 使用 Next.js 和 shadcn/ui 构建个人博客

在这篇文章中，我将分享如何使用 Next.js 和 shadcn/ui 组件库构建一个现代化的个人博客网站。

## 为什么选择 Next.js？

Next.js 是一个基于 React 的框架，它提供了许多开箱即用的功能，如：

- **服务器端渲染 (SSR)** - 提高首屏加载速度和 SEO
- **静态站点生成 (SSG)** - 预渲染页面，提供极快的加载体验
- **增量静态再生成 (ISR)** - 结合了 SSG 和 SSR 的优点
- **文件系统路由** - 简化路由配置
- **API 路由** - 轻松创建 API 端点

## shadcn/ui 组件库简介

shadcn/ui 不是传统意义上的组件库，而是一套可复制粘贴的组件集合，它基于 Tailwind CSS 和 Radix UI 构建。使用 shadcn/ui 的主要优势包括：

1. **完全可定制** - 组件代码完全由你掌控
2. **无依赖性** - 不是一个需要安装的包，没有版本冲突
3. **优秀的可访问性** - 基于 Radix UI 原语
4. **美观的设计** - 现代且优雅的默认样式

## 项目设置

首先，我们需要创建一个新的 Next.js 项目：

```bash
npx create-next-app my-blog --typescript --tailwind --eslint
```

然后，安装 shadcn/ui CLI 工具：

```bash
npx shadcn-ui@latest init
```

## 构建博客功能

接下来，我们需要实现以下功能：

1. 从 Markdown 文件加载博客文章
2. 创建博客列表页面
3. 创建博客详情页面
4. 添加标签过滤功能

## 结论

通过使用 Next.js 和 shadcn/ui，我们可以快速构建一个既美观又高性能的个人博客网站。这种组合不仅提供了出色的开发体验，还确保了最终用户的良好体验。

在后续的文章中，我将深入探讨如何添加更多高级功能，如评论系统、搜索功能和分析工具。 