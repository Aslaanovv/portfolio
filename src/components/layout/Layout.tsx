import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32" data-testid="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}