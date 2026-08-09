import type { Metadata } from "next";
import "./globals.css";
import { personalData } from "@/data/personal";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const seoTitle = "Naga Srinivasa Rao | Full-Stack Developer & AI Engineer";
const seoDescription =
  "Portfolio of Naga Srinivasa Rao, a Full-Stack Developer and AI Engineer building modern websites, full-stack applications, and AI-powered digital products.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "Naga Srinivasa Rao",
    "Full-Stack Developer",
    "AI Engineer",
    "Freelance Web Developer",
    "IIT Guwahati",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "TrustLayerLabs",
    "LeadPilot AI",
    "NexusFlow",
    "LuxeStay",
  ],
  authors: [{ name: personalData.name, url: personalData.contact.github }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nagasrinivasarao.dev",
    title: seoTitle,
    description: seoDescription,
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: personalData.education.institution,
    },
    description: seoDescription,
    sameAs: [personalData.contact.github, personalData.contact.linkedin],
  };

  return (
    <html lang="en" className={cn("dark scroll-smooth font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#09090b] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
