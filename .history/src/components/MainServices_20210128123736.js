import React, { Component } from 'react'

export class MainServices extends Component {
    render() {
        return (
            <div class="container mainServices">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox">
                <div class="service-content">
                    <div class="service-icon">
                        <span><i class="fa fa-globe"></i></span>
                    </div>
                    <h3 class="title">Web <span>Design</span></h3>
                    <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="serviceBox green">
                <div class="service-content">
                    <div class="service-icon">
                        <span><i class="fa fa-rocket"></i></span>
                    </div>
                    <h3 class="title">Web <span>Development</span></h3>
                    <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default MainServices
