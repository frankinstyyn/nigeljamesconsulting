import React from "react";
import AboutNigel from "../components/AboutNigel"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Hero hero="servicesHero">
      <Banner title="About Nigel James Consulting">
        <Link to="/nigelservices" className="btn-primary">
          Learn More
      </Link>
      </Banner>
      </Hero>
        <AboutNigel />
        <Footer />
    </>
  );
};