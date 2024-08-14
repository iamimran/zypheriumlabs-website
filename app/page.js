"use client";

import "@/public/js/theme.js";
import wowjs from "wowjs";

import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <Team />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
