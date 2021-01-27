import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import AboutNigel from "../components/AboutNigel"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="About Nigel James Consulting">
        <Link to="/#aboutInfo" className="btn-primary">
          Learn More
      </Link>
      </Banner>
      </Hero>
        <AboutNigel />
        <Footer />
    </>
  );
};