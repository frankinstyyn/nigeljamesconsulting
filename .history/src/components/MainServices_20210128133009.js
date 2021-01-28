import React, { Component } from 'react'
import { FaGlobe, FaRocket } from 'react-icons/fa'
import { FiDatabase  } from 'react-icons/fi'

export class MainServices extends Component {
    render() {
        return (
            <div class="mainServices">
            <div class="container">
    <div class="row">
        <div class="col-xs-12">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FiDatabase /></span>
                    </div>
                                    <h3 class="title"><span>Data</span></h3>
                                    <p class="description">Database Development and Query Building (SQL)</p>
                                    <Br></Br>
                                            <p class="description">MI Analysis, Data Interogation and Simple representation of findings</p>
                                            <p class="description">Intelligent Reporting</p>
                                        
                </div>
            </div>
        </div>
        {/* <div class="col-md-3 col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FaRocket /></span>
                    </div>
                    <h3 class="title">Web <span>Development</span></h3>
                    <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </div>
        </div> */}
    </div>
                </div>
                </div>
        )
    }
}

export default MainServices
