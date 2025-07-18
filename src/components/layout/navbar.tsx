import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetFooter } from "@/components/ui/sheet";
import { MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const NavItem = ({ href, children, className }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={`text-muted-foreground hover:text-foreground transition-colors ${className || ""}`}
    >
      {children}
    </Link>
  );
};

// 定义导航项图标
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M8 7h6" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </svg>
);

const ProjectsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 9a7 7 0 1 0 14 0A7 7 0 0 0 2 9" />
    <path d="M16 11h6" />
    <path d="M19 8v6" />
    <path d="M9 17.5V22" />
    <path d="M9 2v4.5" />
    <path d="M3.64 12.64 2 14" />
    <path d="m7.64 2.64-1.4 1.4" />
    <path d="m16.36 7.64 1.4-1.4" />
    <path d="m3.64 5.36 1.4 1.4" />
    <path d="m14.36 18.36 1.4 1.4" />
    <path d="m5.36 16.36 1.4 1.4" />
  </svg>
);

const ToolboxIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21.64 3.64a.5.5 0 0 0-.5-.5H2.86a.5.5 0 0 0-.5.5" />
    <path d="M2 6h20" />
    <path d="M12 6v14" />
    <path d="M12 20a2 2 0 0 0 2-2V8a2 2 0 0 0-4 0v10a2 2 0 0 0 2 2z" />
  </svg>
);

const CommunityIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px] pr-0">
        <SheetHeader>
          <SheetTitle className="text-left">我的个人网站</SheetTitle>
          <SheetDescription className="text-left">
            个人博客与项目展示
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-4 py-4">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg hover:bg-accent"
          >
            <HomeIcon className="h-5 w-5" />
            <span>首页</span>
          </Link>
          <Link 
            href="/blog" 
            className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg hover:bg-accent"
          >
            <BlogIcon className="h-5 w-5" />
            <span>博客</span>
          </Link>
          <Link 
            href="/projects" 
            className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg hover:bg-accent"
          >
            <ProjectsIcon className="h-5 w-5" />
            <span>项目</span>
          </Link>
          <Link 
            href="/toolbox" 
            className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg hover:bg-accent"
          >
            <ToolboxIcon className="h-5 w-5" />
            <span>工具箱</span>
          </Link>
          <Link 
            href="/community" 
            className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg hover:bg-accent"
          >
            <CommunityIcon className="h-5 w-5" />
            <span>社区</span>
          </Link>
          <Link 
            href="/about" 
            className="flex items-center gap-3 px-4 py-2 text-base font-medium rounded-lg hover:bg-accent"
          >
            <AboutIcon className="h-5 w-5" />
            <span>关于</span>
          </Link>
        </div>
        <Separator className="my-4" />
        <SheetFooter className="flex-row justify-start sm:justify-start">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">切换主题:</span>
            <ThemeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">我的个人网站</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavItem href="/">首页</NavItem>
          <NavItem href="/blog">博客</NavItem>
          <NavItem href="/projects">项目</NavItem>
          <NavItem href="/toolbox">工具箱</NavItem>
          <NavItem href="/community">社区</NavItem>
          <NavItem href="/about">关于</NavItem>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <MobileNav />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 