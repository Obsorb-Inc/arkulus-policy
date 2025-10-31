import type { Metadata } from "next";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Arkulus Inc",
  description: "Privacy Policy for Arkulus Inc. Learn how we collect, use, and protect your personal information. Last updated July 18, 2021.",
  keywords: ["privacy policy", "Arkulus", "data protection", "privacy notice"],
  openGraph: {
    title: "Privacy Policy | Arkulus Inc",
    description: "Privacy Policy for Arkulus Inc. Learn how we collect, use, and protect your personal information.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicy = () => {
  return <PrivacyPolicyContent />;
};

export default PrivacyPolicy;
