"use client";

import Header from "./pages/header/Header";
import SelectApi from "./pages/selectApi/SelectApi";
import Footer from "./pages/footer/Footer";
import styles from "@/app/styles/page.module.css";
import ShowApi from "./pages/showApi/ShowApi";
import ShowLiquid from "./pages/showLiquid/ShowLiquid";

export default function Home() {

  return (
    <main className={styles.page}>
      <Header />
      <SelectApi />
      <ShowApi />
      <ShowLiquid />
      <Footer />
    </main>
  );
}
