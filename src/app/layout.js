import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveApiProvider } from "./context/ActiveApiProvider";
import { CollectionsProvider } from "./context/CollectionsContext";
import { ActiveQueryProvider } from "./context/ActiveQueryContext";
import { ShopProvider } from "./context/ShopContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopify Objects Map",
  description: "Aiding Developer Workflow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ActiveApiProvider>
        <CollectionsProvider>
          <ActiveQueryProvider>
            <ShopProvider>
              <body className={inter.className}>{children}</body>
            </ShopProvider>
          </ActiveQueryProvider>
        </CollectionsProvider>
      </ActiveApiProvider>
    </html>
  );
}
