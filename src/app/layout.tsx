import HeaderFrases from "@/components/header-frases";
import Header from "@/components/header";

import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <HeaderFrases/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}