import React, { Component } from 'react'


export class AboutNigel extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 nigelImg">
                <img src="./" alt=""></img>
                </div>
                <div className="col-sm-6">
                    <div className="aboutContent">
                <h1>Nigel Bratton</h1>
                    <h5>An experienced business analyst and former security and loss prevention manager offering a multitude of skills as a consultant for your business.</h5>
                    <h6>Our main aim is to introduce profitable processes into your business. We aim to help you get the most from your budget and turn those losses into gains through varying channels.</h6>
                        <p className="underline"> </p>
                        </div>
                    </div>
            {/* <div className="row">
                    <div className="col-sm-6 servicesImage one">
                        <div className="servicesText">
                        <h5>Block Paving</h5>
                            <p>Restore block paving to former glory without the mess of using water</p>
                            </div>
                </div>
                    <div className="col-sm-6 servicesImage two">
                        <div className="servicesText">
                        <h5>Guttering</h5>
                        <p>Using our unique high performance SkyVac equipment, we clear gutters with no mess in half the time</p>
                        </div>
                </div>                  
                </div> */}
                        </div>
        )
    }
}

export default AboutNigel
