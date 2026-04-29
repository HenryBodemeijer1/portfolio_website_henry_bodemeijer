import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-black dark:bg-black dark:text-white">
        <div className="min-h-screen flex flex-col">
          
          <Header />

          <main className="flex-1 max-w-5xl mx-auto w-full px-4">
            {children}
          </main>

          <Footer />

        </div>
      </body>
    </html>
  );
}