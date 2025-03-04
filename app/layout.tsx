import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MIC Manager",
  description: "Un humil assistent per a organitzar calçotadas amb amics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid items-center p-2 justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
          <main className="flex w-100 max-w-[360] flex-col gap-8 row-start-2">
            <div>
              <h1 className="text-9xl leading-[0.7] font-bold">MIC</h1>
              <h2 className="text-5xl leading-0 font-bold">(Manager)</h2>
            </div>
            {children}
          </main>
          <footer className="row-start-3 max-w-[360] flex mt-8 text-xs flex-wrap items-center justify-center">
            <p className="text-xs mb-4"><strong>Disclaimer:</strong> Aquest projecte només busca facilitar el càlcul de quantitats i el repartiment de responsabilitats en un MIC (Massiva Ingesta de Calçots). Per qualsevol errada hablen con mi abogado. Aquesta aplicació no te cap mena de capa de seguretat, no posar dades personals comprometedores.</p>
            <p className="text-xs">by Lot Gállego</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
