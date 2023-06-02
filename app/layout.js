import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import Provider from "../context/AuthContext";
import ToasterContext from "../context/ToasterContext";

export const metadata = {
  title: "Quran+",
  description: "Aplikasi Al-Quran berbasis web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#E9E6D7" }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-cover relative  flex-grow "
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portfolio-web-6bc3e.appspot.com/o/masjid.svg?alt=media&token=45fbcee4-caf2-4c76-9247-7164683b938b)`,
          }}
        >
          <Provider>
            <NavBar />
            <ToasterContext />
            {children}
          </Provider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
