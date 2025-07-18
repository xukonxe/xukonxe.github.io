import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full py-10">{children}</main>
      <Footer />
    </div>
  );
} 