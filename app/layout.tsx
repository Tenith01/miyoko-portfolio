import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = "https://tenith.me";
const fullName = "Tenith Hasintha";
const title = "Tenith Hasintha — Full-Stack Engineer & AI Builder | tenith.me";
const description =
  "Tenith Hasintha is a Full-Stack Engineer & AI Builder with 4+ years building scalable Python backends, AI-powered applications, LLM integrations (LangChain, LangGraph), and real-time data systems. Based in Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Tenith Hasintha",
  },
  description,
  keywords: [
    "Tenith",
    "Tenith Hasintha",
    "tenith.me",
    "Tenith developer",
    "Tenith engineer",
    "Tenith portfolio",
    "Tenith Hasintha portfolio",
    "Tenith Hasintha Sri Lanka",
    "Full-Stack Engineer",
    "AI Builder",
    "Python developer",
    "LangChain developer",
    "LangGraph",
    "FastAPI",
    "NestJS",
    "React developer",
    "Next.js developer",
    "blockchain developer",
    "LLM integration",
    "Metarune Labs",
    "software engineer Sri Lanka",
  ],
  authors: [{ name: fullName, url: siteUrl }],
  creator: fullName,
  publisher: fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tenith Hasintha — Portfolio",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/profile.png`,
        width: 800,
        height: 800,
        alt: "Tenith Hasintha — Full-Stack Engineer & AI Builder",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/profile.png`],
    creator: "@tenith",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

// JSON-LD Structured Data for Google Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  alternateName: ["Tenith", "tenith", "Tenith01"],
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  jobTitle: "Lead Software Engineer — Full Stack & AI",
  worksFor: {
    "@type": "Organization",
    name: "Metarune Labs (Pvt) Ltd",
    url: "https://www.metarunelabs.dev/",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Kelaniya",
  },
  knowsAbout: [
    "Python",
    "TypeScript",
    "Full-Stack Development",
    "Artificial Intelligence",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "NestJS",
    "React",
    "Next.js",
    "Blockchain",
    "Machine Learning",
    "LLM Fine-tuning",
    "RAG Systems",
  ],
  sameAs: [
    "https://github.com/Tenith01",
    "https://www.linkedin.com/in/tenith-hasintha-807bb7219",
    "https://huggingface.co/tenith",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressRegion: "Sri Lanka",
  },
  description,
};

// JSON-LD for the website itself
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tenith Hasintha — Portfolio",
  alternateName: "tenith.me",
  url: siteUrl,
  description,
  author: {
    "@type": "Person",
    name: fullName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
