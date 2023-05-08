import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Quran+",
  description: "Aplikasi Al-Quran berbasis web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-green-500 via-green-800 to-emerald-900">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
