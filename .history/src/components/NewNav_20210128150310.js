import React, { Component } from "react";
import logo from "../images/njcLogo.svg";
import { Nav, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { HashLink as Link } from 'react-router-hash-link';


export default class NewNav extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
        window.addEventListener("scroll", this.navTransparent);
        window.addEventListener("scroll", this.navShadow);
    };
    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementById("logo");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("logoShrink");
      
        } else {
            headerEl.classList.remove("logoShrink");
        }
    }

    navTransparent() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementById("navbar");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("navbarBg");
      
        } else {
            headerEl.classList.remove("navbarBg");
        }

    }
  
    navShadow() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementById("navbar");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("navShadow");
      
        } else {
            headerEl.classList.remove("navShadow");
        }
    }
    render() {
        return <div className="myContainer">
            <Navbar id="navbar" className="newNav" expand="lg">
            <Navbar.Brand href="/#toTop"><img id="logo" src={logo} alt="Nigel James Consulting Logo"/></Navbar.Brand>
            <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" onClick={this.handleToggle} duration={500}>
                    <Nav className="ml-auto">
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            // offset={-200}
                            // duration={5}
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                        </Link>
                        <Link
                        activeClass="active"
                            to="/nigelservices"
                            spy={true}
                            smooth={true}
                            // offset={-70}
                            // duration={5}
                        >
                            <Nav.Link id="nav-links" href="/nigelservices">Services</Nav.Link>
                        </Link>
                    <Link
                            to="/about"
                            spy={true}
                            smooth={true}
                            // offset={-200}
                            // duration={5}
                        >
                            <Nav.Link href="/about">About</Nav.Link>
                            </Link>
                </Nav>

                    </Navbar.Collapse>
        </Navbar>
            </div>
    
    }
}