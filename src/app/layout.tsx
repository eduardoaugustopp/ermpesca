import "./globals.css";
import HeaderFrases from "@/components/header-frases";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Seguranca from "@/components/footer-seguranca";

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
        <Seguranca />
        <Footer />
      </body>
    </html>
  );
}