import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrace Houses at 36 Courtenay Crescent | Virtual Walkthrough",
  description:
    "Redevelopment virtual walkthrough: demolish existing single-storey house and build 4 new terrace houses at Mangere East.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-body">{children}</body>
    </html>
  );
}
