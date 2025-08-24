
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import Sidebar from "./components/app/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <title>Podcasts | Thmanyah Task</title>
      </head>

      <html lang="en">
        <body className="bg-mirage-950 min-h-screen flex flex-col overflow-x-hidden">
          <div className="flex-grow flex w-full">
            <Sidebar />
            <div className="flex-grow flex flex-col min-w-0 md:pl-64 w-full">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
