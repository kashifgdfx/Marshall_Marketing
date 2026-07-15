import dynamic from "next/dynamic";
import FeaturedUSP from "@/components/FeaturedUSP";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQSection from "@/components/FAQSection";


const HappyCustomers = dynamic(
  () => import("@/components/HappyCustomers"),
  {
    loading: () => <div className="h-96" />,
  }
);

const VideoContactSection = dynamic(
  () => import("@/components/VideoContactSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

export const metadata = {
  title: "Marshal Marketing & Management | Aviation Security & Threat Detection Experts",
  description:
    "Marshal Marketing & Management provides expert security consulting, Computer-Based X-Ray Screener Training (CBT), and advanced threat detection solutions for aviation, airports, and government enterprises in India. ISO 9001-2015 Certified.",
  keywords: [
    "Aviation Security India", 
    "X-Ray Screener Training", 
    "Computer Based Training CBT", 
    "Threat Detection Systems", 
    "Security Management Services", 
    "Baggage Handling System Training", 
    "Marshal Marketing New Delhi"
  ],
  alternates: {
    canonical: "https://marshal-m-m.com/",
  },
  openGraph: {
    title: "Marshal Marketing & Management | Security & Threat Detection Experts",
    description:
      "India's leading security management company specializing in X-Ray image recognition training, threat detection kits, and corporate security consulting.",
    url: "https://marshal-m-m.com/",
    siteName: "Marshal Marketing & Management",
    images: [
      {
        url: "/og-image.png", // अपनी वेबसाइट के रूट फोल्डर में एक अच्छी OG इमेज रखें
        width: 1200,
        height: 630,
        alt: "Marshal Marketing & Management Security Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marshal Marketing & Management | Security & Threat Detection Experts",
    description:
      "Expert security consulting, X-Ray training, and threat detection solutions for aviation and government sectors.",
    images: ["/og-image.png"],
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedUSP />
      <Services />
   
      
      <HappyCustomers />
      <FAQSection/>
      <VideoContactSection />
    </>
  );
}