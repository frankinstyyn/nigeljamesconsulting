import React, { Component } from 'react'
import { FaDrawPolygon, FaClipboardList } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { TiFlowSwitch } from 'react-icons/ti'
import { IoMdAnalytics } from 'react-icons/io'
import { GiTeacher } from 'react-icons/gi'

export class MainServices extends Component {
    render() {
        return (
            <div class="mainServices">
                <div className="servicesBanner">
                    <h1>Consltancy Services</h1>
                    <div></div>
                </div>
                <div id="servicesContainer" class="container">
                    <div className="servicesH3">
                        <h3>Below is a list of services we provide, if you have any specific questions about these, or any additional services, please get in touch</h3>
                    </div>
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
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
        <div class="col-sm-12 col-md-6 col-lg-4">
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
                        <div class="col-sm-12 col-md-6 col-lg-4">
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
                    <div className="servicesH3">
                        <h3>Loss Prevention & Retail/Distribution Security Consultancy</h3>
                    </div>
                    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
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
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><GiTeacher /></span>
                    </div>
                                    <h3 class="title"><span>Training</span></h3>
                                    <p class="description">- Workshop on how to get the most from your Loss Prevention team</p>
                                    <p class="description">- Service level assessments of guards situated in retail outlets</p>
                                    <p class="description">- Training for guards positioned in DC's on vigilance, awareness and productivity</p>
                                    <p class="description">- Development of programs and projects to cut down time spent on non important daily tasks</p>
                </div>
            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><FaClipboardList /></span>
                    </div>
                                    <h3 class="title"><span>Audit & Improvement</span></h3>
                                    <p class="description">- Independent analysis of stock audit results to offer advice on key areas of loss and prioritisation of targets</p>
                                    <p class="description">- Omni-channel distribution process design</p>
                                    <p class="description">- Mystery shoplifting - testing your guards and store staff vigilance</p>
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
