export const siteConfig = {
  companyName: "CEN MEDIA",
  email: "hello@yourcompany.com",
  phone: "+234 XXX XXX XXXX",
  location: "Lagos, Nigeria",
  bookingUrl: "YOUR_BOOKING_URL",
  instagram: "#",
  tiktok: "#",
  linkedin: "#",
  twitter: "#",
};

/** Booking link: uses bookingUrl once replaced, otherwise falls back to email. */
export const bookingHref =
  siteConfig.bookingUrl && siteConfig.bookingUrl !== "YOUR_BOOKING_URL"
    ? siteConfig.bookingUrl
    : `mailto:${siteConfig.email}?subject=Strategy%20Call%20Request`;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Story", href: "#story" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
];
