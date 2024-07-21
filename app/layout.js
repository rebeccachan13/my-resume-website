import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rebecca Chan",
  description: "Resume Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake"> {/* Add data-theme here */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
