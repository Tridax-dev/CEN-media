import { siteConfig } from "../config";

export default function Logo({ className = "h-10" }: { className?: string }) {
  return <img src="/logo.png" alt={`${siteConfig.companyName} logo`} className={`w-auto ${className}`} />;
}
