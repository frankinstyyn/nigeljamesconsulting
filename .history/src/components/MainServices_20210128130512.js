import React, { Component } from 'react'
import { FaGlobe, FaRocket } from 'react-icons/fa'

export class MainServices extends Component {
    render() {
        return (
            <div class="mainServices">
            <div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FaGlobe /></span>
                    </div>
                    <h3 class="title"><span>Data</span></h3>
                    <p class="description">Database Development and Query Building (SQL)</p>
                    <p class="description">This is just to see</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FaRocket /></span>
                    </div>
                    <h3 class="title">Web <span>Development</span></h3>
                    <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </div>
        </div>
    </div>
                </div>
                </div>
        )
    }
}

export default MainServices
