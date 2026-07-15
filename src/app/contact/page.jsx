import ContactWrapper from '@/components/Contactwrapper'
import React from 'react'

export const metadata = {
  title: "Contact Us | Food Poison & Explosive Detection Kit Support",
  description:
    "Get in touch with Marshal Marketing & Management Pvt. Ltd. for technical support, procurement inquiries, or assistance regarding our advanced STPD-06 Food Poison Detection Kits.",
  
  alternates: {
    canonical: "https://marshal-m-m.com/contact",
  },

  openGraph: {
    title: "Contact Us | Food Poison & Explosive Detection Kit Support",
    description:
      "Get in touch with Marshal Marketing & Management Pvt. Ltd. for technical support, procurement inquiries, or assistance regarding our advanced STPD-06 Food Poison Detection Kits.",
    url: "https://marshal-m-m.com/contact",
    siteName: "Marshal Marketing & Management Pvt. Ltd.",
    images: [
      {
        url: "/og-image.png", // आप चाहें तो इसे अपनी प्रोडक्ट इमेज /explosive-img.png से बदल सकते हैं
        width: 1200,
        height: 630,
        alt: "Contact Marshal Marketing & Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Food Poison & Explosive Detection Kit Support",
    description:
      "Get in touch with Marshal Marketing & Management Pvt. Ltd. for technical support, procurement inquiries, or assistance regarding our advanced STPD-06 Food Poison Detection Kits.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div>
      <ContactWrapper />
    </div>
  )
}

export default page