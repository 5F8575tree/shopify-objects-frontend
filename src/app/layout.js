import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveApiProvider } from "./context/ActiveApiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopify Objects Map",
  description: "Aiding Developer Workflow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ActiveApiProvider>
        <body className={inter.className}>{children}</body>
      </ActiveApiProvider>
    </html>
  );
}
