import "./globals.css";
import { Inter } from "next/font/google"
import NavBar from "./components/NavBar";
import AuthProvider from "./context/AuthProvider"

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
        <AuthProvider>
          <NavBar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
