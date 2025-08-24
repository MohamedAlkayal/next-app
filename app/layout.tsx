
import Header from "./components/app/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-mirage-950">
        <Header />

        {children}
      </body>
    </html>
  );
}
