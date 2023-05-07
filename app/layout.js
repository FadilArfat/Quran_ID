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
      <body style={{ backgroundColor: "#6A9D41" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
