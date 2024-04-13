import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ContactUs from "@/components/layout/contacUs";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" ">
         
        <Header/>
        {children}
        </main>
        <ContactUs/>
      <Footer/>
    
        </body>

    </html>
  );
}