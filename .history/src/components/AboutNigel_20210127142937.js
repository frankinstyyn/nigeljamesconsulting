import React, { Component } from 'react'

export class AboutNigel extends Component {
    render() {
        return (
            <div className="services">
                <div class="servicesHead">
                <h1>Services</h1>
                <h5>Eco friendly cleaning services in Derby and Derbyshire</h5>
                    <p className="underline"> </p>
                    </div>
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
                <div className="row">
                    <div className="col-sm-4 servicesImage seven">
                        <div class="servicesText">
                            <h5>Other Jobs</h5>
                            <p id="waysOfWorking">We provide many other outdoor services so get in touch for a free quote</p>
                        </div>
                </div>              
                </div>
                        </div>
        )
    }
}

export default AboutNigel
