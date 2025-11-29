import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We removed the Google Font import to fix the network error.
// We will rely on Tailwind's default 'sans' stack which is excellent.

export const metadata: Metadata = {
  // Update your tab title and description here
  title: "WCMG | Weather & Climate Modelling Group",
  description: "Official website of Dr. Raju Attada's Research Group at IISER Mohali.",
  icons: {
    icon: '/images/weclimb.png', // This ensures your logo is the tab icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We added 'font-sans' and 'antialiased' to the body.
        'antialiased' makes text look sharper on modern screens.
      */}
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}