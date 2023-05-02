import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Quran+",
  description: "Aplikasi Al-Quran web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
