import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import AboutNigel from "../components/AboutNigel"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="About Nigel James Consulting">
      </Banner>
      </Hero>
        <AboutNigel />
        <Footer />
    </>
  );
};