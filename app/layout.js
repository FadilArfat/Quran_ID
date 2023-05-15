import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "@/components/Footer";
import Masjid from "../public/masjid.svg";

export const metadata = {
  title: "Quran+",
  description: "Aplikasi Al-Quran berbasis web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#E9E6D7" }}>
        <div
          className="w-full h-full bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(${Masjid})`,
          }}
        >
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
