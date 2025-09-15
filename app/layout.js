import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";



export default function RootLayout({ children }) {
  const mainColor = "#0060bf";

  return (
    <html lang="en">
      <body>
        <div className="w-full text-white font-bold text-center py-4 px-4" style={{ background: mainColor }}>
          <p>"Get 50% off on all products – Limited Time Offer!"</p>
        </div>
        <Navbar />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
