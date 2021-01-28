import React, { Component } from 'react'
import { FaDrawPolygon } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { TiFlowSwitch } from 'react-icons/ti'
import { IoMdAnalytics } from 'react-icons/io'

export class MainServices extends Component {
    render() {
        return (
            <div class="mainServices">
                <div className="servicesBanner">
                    <h1>Consltancy Services</h1>
                </div>
                <div class="container">
                    <div className="servicesH3">
                        <h3>Below is a list of services we provide, if you have any specific questions about these, or any additional services, please get in touch</h3>
                    </div>
    <div class="row">
        <div class="col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><TiFlowSwitch /></span>
                    </div>
                                    <h3 class="title"><span>Planning</span></h3>
                                    <p class="description">- Marketing support</p>
                                    <p class="description">- Technical efficiency planning</p>
                                    <p class="description">- Project management</p>
                                        
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FiDatabase /></span>
                    </div>
                                    <h3 class="title"><span>Data</span></h3>
                                    <p class="description">- Database Development and Query Building (SQL)</p>
                                    <p class="description">- MI Analysis, Data Interogation and Simple representation of findings</p>
                                    <p class="description">- Intelligent Reporting</p>
                </div>
            </div>
                        </div>
                        <div class="col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FaDrawPolygon /></span>
                    </div>
                                    <h3 class="title"><span>Design Modelling</span></h3>
                                    <p class="description">- Dashboard Design</p>
                                    <p class="description">- Sales forecasting</p>
                                    <p class="description">- Price elasticity modelling</p>
                </div>
            </div>
        </div>
                    </div>
                    
                    <div class="row">
        <div class="col-sm-4">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><IoMdAnalytics /></span>
                    </div>
                                    <h3 class="title"><span>Analysis</span></h3>
                                    <p class="description">- E-commerce fulfilment chain highlighting risk and breach areas</p>
                                    <p class="description">- Distribution chain security from warehouse to store</p>
                                    <p class="description">- Analysis and service level assessment of security services provided for HQ and/or Distribution centres</p>
                                    <p class="description">- retail losses through in store services</p>
                                        
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FiDatabase /></span>
                    </div>
                                    <h3 class="title"><span>Data</span></h3>
                                    <p class="description">- Database Development and Query Building (SQL)</p>
                                    <p class="description">- MI Analysis, Data Interogation and Simple representation of findings</p>
                                    <p class="description">- Intelligent Reporting</p>
                </div>
            </div>
                        </div>
                        <div class="col-sm-4">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FaDrawPolygon /></span>
                    </div>
                                    <h3 class="title"><span>Design Modelling</span></h3>
                                    <p class="description">- Dashboard Design</p>
                                    <p class="description">- Sales forecasting</p>
                                    <p class="description">- Price elasticity modelling</p>
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
