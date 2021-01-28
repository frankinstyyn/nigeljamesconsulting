import React, { Component } from 'react'
import professional from '../images/professional.jpg'


export class AboutNigel extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div>
                        <img className="nigelImg" src={professional} alt=""></img>
                        </div>
                </div>
                <div className="col-sm-6">
                    <div className="aboutContent">
                <h1>Nigel Bratton</h1>
                    <h5>An experienced business analyst and former security and loss prevention manager offering a multitude of skills as a consultant for your business.</h5>
                    <h6>Our main aim is to introduce profitable processes into your business. We aim to help you get the most from your budget and turn those losses into gains through varying channels.</h6>
                        <p className="underline"> </p>
                        </div>
                    </div>
                        </div>
        )
    }
}

export default AboutNigel
