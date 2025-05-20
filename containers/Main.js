import React, { Component } from "react";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import ScrollToTopButton from "../components/scrollToTop/ScrollToTop";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    }
  }

  render() {
    return (
      <div className="main-container">
        <div id="home" className="section">
          <Home theme={this.props.theme} />
        </div>
        <div id="education" className="section">
          <Education theme={this.props.theme} />
        </div>
        <div id="projects" className="section">
          <Projects theme={this.props.theme} />
        </div>
        <div id="contact" className="section">
          <Contact theme={this.props.theme} />
        </div>
        <ScrollToTopButton theme={this.props.theme} />
      </div>
    );
  }
}
