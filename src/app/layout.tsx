
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MusicPlayer from "@/components/music-player";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Rangoon California | Authentic Burmese Cuisine in California",
  description: "Experience the rich tastes and warm culture of Burma. Rangoon California brings authentic Yangon street food and traditional dishes to California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;700&family=Poppins:wght@300;400;500&family=Noto+Serif+Myanmar:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-dvh flex-col rice-paper-bg">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <MusicPlayer />
        <Toaster />
      </body>
    </html>
  );
}
