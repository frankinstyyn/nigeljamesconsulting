import React, { Component } from 'react'
import { GrInstagram } from 'react-icons/gr'
import { MdGolfCourse, MdScreenShare } from 'react-icons/md'
import nigel1 from "../images/nigel1.JPEG"
import nigel2 from "../images/nigel2.JPEG"
import nigel3 from "../images/nigel3.JPEG"


export class GolfServices extends Component {
    render() {
        return (
            <div class="golfServices">
                <div className="servicesBanner golfBanner">
                    <h1>Golf Lessons</h1>
                    <div></div>
                </div>
  <div class="container">
                    <div className="servicesH3">
                        <h3>After recently becoming a PGA pro, I'm passionate about providing quality, structured lessons. To book a lesson, get in touch now</h3>
                    </div>
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon1 icon">

                        <i class="fa fa-linkedin-square" aria-hidden="true"><GrInstagram /></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>Instagram</h3>
                    <p>Send me your videos on Instagram for swing analysis and improvement</p>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon2 icon">
                        <i class="fa fa-twitter-square" aria-hidden="true"><MdScreenShare /></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>Zoom Lessons</h3>
                    <p>In the digital era, take charge of your game anywhere in the world</p>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon3 icon">
                        <i class="fa fa-github-square" aria-hidden="true"><MdGolfCourse /></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>Range Lessons</h3>
                    <p>In person lessons, improve all aspects of your golf game and reduce your handicap</p>
                </div>
            </div>
        </div>
        </div>
        <div className="golfRow">
            <a class="golf-btn-primary" href="tel:07590647481">Get In Touch</a>
                        </div>
                            <div class="col-sm-12 col-md-4">
                               <img src={nigel1} alt="Nigel golf stance"></img>
                               <img src={nigel2} alt="Nigel golf banner"></img>
                               <img src={nigel3} alt="Nigel golf finish position"></img>
                            </div>
    </div>
                </div>
                </div>
        )
    }
}

export default GolfServices
