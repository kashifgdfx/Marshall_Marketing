import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import WhatsAppButton from "@/components/WhatsAppButton ";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";


export const metadata = {
  metadataBase: new URL("https://marshal-m-m.com/Explosive.html"),
  
  // Title aur Description zaroor add karein, ye SEO ke liye bahut zaruri hain
  title: "Marshal Marketing & Management | Premier Security Solutions India",
  description: "Leading provider of security management, X-Ray screener training, and advanced threat detection systems in India. ISO 9001-2015 Certified.",

  // Verification codes properly formatted
  verification: {
    google: "vN8S9DNzxBdD18ErJ-40I7FjJ9dxq7uYDkfPMqF9ccY",
  },

  // Robots config
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

  // Icons configuration
  icons: {
    icon: "/marshallogo.png",
    shortcut: "/marshallogo.png",
    apple: "/marshallogo.png",
  },
  
  // Open Graph (Social media sharing ke liye)
  openGraph: {
    title: "Marshal Marketing & Management Pvt. Ltd.",
    description: "Leading security management and X-Ray training services in India.",
    url: "https://marshal-m-m.com/Explosive.html",
    siteName: "Marshal Marketing",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LXGNCN97KX"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXGNCN97KX');
          `}
        </Script>
      </head>
      <body>
       <CustomCursor/>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <WhatsAppButton />
        {/* <CallButton /> */}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}