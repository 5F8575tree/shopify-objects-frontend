import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveApiProvider } from "./context/ActiveApiProvider";
import { CollectionsProvider } from "./context/CollectionsContext";
import { ActiveQueryProvider } from "./context/ActiveQueryContext";
import { ShopProvider } from "./context/ShopContext";
import { ProductsProvider } from "./context/ProductsContext";

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
              <ProductsProvider>
                <body className={inter.className}>{children}</body>
              </ProductsProvider>
            </ShopProvider>
          </ActiveQueryProvider>
        </CollectionsProvider>
      </ActiveApiProvider>
    </html>
  );
}
