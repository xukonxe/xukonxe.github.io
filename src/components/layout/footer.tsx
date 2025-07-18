import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {year} 我的个人网站. 保留所有权利.
          </p>
          <p className="text-center text-xs text-muted-foreground md:text-left">
            使用 <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">Next.js</Link> 和 <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">shadcn/ui</Link> 构建
          </p>
        </div>
        <Link href="/community" className="text-sm font-medium hover:underline underline-offset-4">
          加入社群
        </Link>
      </div>
    </footer>
  );
} 