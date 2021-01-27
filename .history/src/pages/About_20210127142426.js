import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
    
          <div>
              <div className="row">
                    <div className="col-sm-4 servicesImage one">
                        <div class="servicesText">
                        <h5>Block Paving</h5>
                            <p>Restore block paving to former glory without the mess of using water</p>
                            </div>
                </div>
                    <div className="col-sm-4 servicesImage two">
                        <div class="servicesText">
                        <h5>Guttering</h5>
                        <p>Using our unique high performance SkyVac equipment, we clear gutters with no mess in half the time</p>
                        </div>
                </div>
                    <div className="col-sm-4 servicesImage three">
                        <div class="servicesText">
                        <h5>Patios</h5>
                        <p>Our Eco friendly Westermann cleaner avoids the use of nasty chemicals or water, leaving a sharp clean finish with less mess</p>
                        </div>
                    </div>                    
              </div>
              </div>
      <Footer />
      </>
  );
};