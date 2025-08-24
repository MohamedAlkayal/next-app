
import Header from "@/app/components/app/Header";
import Footer from "@/app/components/app/Footer";
import Sidebar from "@/app/components/app/Sidebar";
import "@/app/globals.css";

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
        <body className="bg-mirage-950 min-h-screen flex flex-col overflow-x-hidden font-custom">
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
