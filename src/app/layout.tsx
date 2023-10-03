import type { Metadata } from "next";
import Navbar from "./components/NavBar";
import "./globals.css";
import CartContextProvider from "./provider/CartContextProvider";

export const metadata: Metadata = {
  title: "Grocery shop",
  description: "Get all you need in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-6">
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
