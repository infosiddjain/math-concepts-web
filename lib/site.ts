export const site = {
  name: "Math Concepts",
  shortName: "Math Concepts",
  tagline: "Calculate with precision. Understand with clarity.",
  description:
    "Math Concepts is a premium calculator and learning studio — solve everyday math instantly and understand the real-world ideas behind it.",
  url: "https://mathconcepts.app",
  email: "infosiddjain@gmail.com",
  creator: "Siddharth Jain",
};

export const socialLinks = [
  { label: "GitHub", icon: "github", href: "https://github.com/infosiddjain" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/infosiddjain/" },
  { label: "Twitter", icon: "twitter", href: "https://x.com/infosiddjain" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/infosiddjain/" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/infosiddjain" },
] as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  product: [
    { label: "All Calculators", href: "/calculators" },
    { label: "Learn Math", href: "/learn" },
    { label: "About Us", href: "/about" },
  ],
  company: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
