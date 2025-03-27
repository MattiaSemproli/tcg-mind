import "./globals.css";
import { Inter } from "next/font/google"
import NavBar from "../components/NavBar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "TCG-MIND!",
  description: "Keep trace of your TCG game and tournament reports!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
      </body>
    </html>
  );
}
