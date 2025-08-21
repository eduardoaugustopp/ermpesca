import "./globals.css";
import HeaderFrases from "@/components/header-frases";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NotFound from "./not-found";

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