import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from "@/Components/Navbar";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import QueryProvider from "@/Components/QueryProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/AuthProvider/AuthProvider";

const queryClient = new QueryClient();

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

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"]
})

export const metadata = {
  title: "Epicurean Bliss",
  description: "Enjoy Your Meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <Toaster />
            <Navbar />
            <div className="px-4">
              {children}
            </div>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
