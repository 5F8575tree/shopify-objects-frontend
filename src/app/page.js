"use client";

import Header from "./pages/header/Header";
import SelectApi from "./pages/selectApi/SelectApi";
import Footer from "./pages/footer/Footer";
import styles from "@/app/styles/page.module.css";

export default function Home() {

  return (
    <main className={styles.page}>
      <Header />
      <SelectApi />
      <Footer />
    </main>
  );
}
