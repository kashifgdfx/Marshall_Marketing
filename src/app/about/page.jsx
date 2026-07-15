import AboutWrapper from '@/components/AboutWrapper'
import React from 'react'

export const metadata = {
  title: "About Us | Security & Detection Solutions Experts",

  description:
    "Learn more about Marshal Marketing & Management Pvt. Ltd., our commitment to premier security screening, anti-terror tech, and global field detection solutions.",

  alternates: {
    canonical: "https://marshal-m-m.com/about",
  },

  openGraph: {
    title: "About Us | Marshal Marketing & Management",

    description:
      "Learn more about Marshal Marketing & Management Pvt. Ltd., our commitment to premier security screening, anti-terror tech, and global field detection solutions.",

    url: "https://marshal-m-m.com/about",

    siteName: "Marshal Marketing & Management Pvt. Ltd.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Marshal Marketing & Management",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Us | Marshal Marketing & Management - Security Solutions",

    description:
      "Learn more about Marshal Marketing & Management Pvt. Ltd., our commitment to premier security screening, anti-terror tech, and global field detection solutions.",

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
      <AboutWrapper/>
    </div>
  )
}

export default page