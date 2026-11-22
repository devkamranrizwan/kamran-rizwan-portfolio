import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const title = "Kamran Rizwan | Senior Software Engineer";
const description = "Kamran Rizwan — Senior Software Engineer with 8+ years of experience. Explore commercial work across Lumitrade.ai, whatever.works, MS Direct, Arthur, Intelligize, BitMovio, and ITBoost.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamran-rizwan.vercel.app"),
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: { icon: { url: "/assets/favicon.png", type: "image/png" }, apple: "/assets/apple-touch-icon.png" },
  openGraph: {
    type: "website", url: "/", title,
    description: "Selected commercial engineering work and independent projects from Kamran Rizwan, a senior software engineer with 8+ years of experience.",
    images: [{ url: "/assets/social-preview.jpg", width: 1200, height: 630, alt: "Kamran Rizwan, Senior Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image", title,
    description: "Professional work across fintech, enterprise SaaS, immersive collaboration, logistics and independent product engineering.",
    images: ["/assets/social-preview.jpg"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#10171b" };

const themeScript = `try{if(localStorage.getItem('portfolio-theme-preference')==='light'){document.documentElement.dataset.theme='light';document.querySelector('meta[name="theme-color"]').content='#f3f2ec'}}catch(_){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html data-theme="dark" lang="en" suppressHydrationWarning><head><link href="https://fonts.googleapis.com" rel="preconnect" /><link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" /><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@500;600;700;800&family=Fraunces:opsz,wght,SOFT,WONK@9..144,600,0,1;9..144,700,0,1&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" /><Script id="theme-preference" strategy="beforeInteractive">{themeScript}</Script></head><body>{children}</body></html>;
}
