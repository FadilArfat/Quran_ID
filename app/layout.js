import "./globals.css";
import NavBar from "../components/navbar";

export const metadata = {
  title: "Quran+",
  description: "Aplikasi Al-Quran web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />
      <body className="bg-gray-800">{children}</body>
    </html>
  );
}
