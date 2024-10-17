// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import AuthContextProvider from "@/app/contexts/AuthContext"; // Import your AuthContextProvider
import { Toaster } from "react-hot-toast";
import { SocketContextProvider } from "./contexts/SocketContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "VibeConnect",
  description: "Created by Vyom Raval",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favic.png" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthContextProvider>
          <SocketContextProvider>
            <Toaster />
            {children}
          </SocketContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
