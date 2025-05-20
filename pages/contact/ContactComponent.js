import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../../emailjs/config';

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formStatus: '',
      isSubmitting: false
    };
  }

  openLocationInMaps = () => {
    const { streetAddress, locality, region, country, postalCode } = addressSection;
    const address = `${streetAddress}, ${locality}, ${region}, ${country} ${postalCode}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true, formStatus: 'Sending...' });

    const templateParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      message: this.state.message,
      to_email: 'powerfulsoul796@gmail.com'
    };

    emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.userId
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({
          name: '',
          email: '',
          message: '',
          formStatus: 'Message sent successfully!',
          isSubmitting: false
        });
        setTimeout(() => this.setState({ formStatus: '' }), 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        this.setState({
          formStatus: 'Failed to send message. Please try again.',
          isSubmitting: false
        });
      });
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-content-wrapper">
              <div className="contact-left-section">
                <div className="contact-image-collage">
                  <div className="collage-container">
                    <div className="collage-item item1">
                      <img src={require('../../assets/images/ContactMe1.jpg')} alt="Contact" />
                    </div>
                    <div className="collage-item item2">
                      <img src={require('../../assets/images/ContactMe2.jpg')} alt="Contact" />
                    </div>
                    <div className="collage-item item3">
                      <img src={require('../../assets/images/ContactMe3.jpg')} alt="Contact" />
                    </div>
                    <div className="collage-item item4">
                      <img src={require('../../assets/images/ContactMe4.jpg')} alt="Contact" />
                    </div>
                    <div className="collage-title">
                      <h2>Get In Touch</h2>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-right-section">
                <div className="contact-heading-text-div">
                  <h1
                    className="contact-heading-text"
                    style={{ color: theme.text }}
                  >
                    {ContactData["title"]}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {ContactData["description"]}
                  </p>
                </div>
                
                <div className="contact-form-div">
                  <h2 className="form-heading" style={{ color: theme.text }}>
                    Send Me a Message
                  </h2>
                  <form className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" style={{ color: theme.text }}>Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                        style={{ borderColor: theme.highlight }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" style={{ color: theme.text }}>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        style={{ borderColor: theme.highlight }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" style={{ color: theme.text }}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                        style={{ borderColor: theme.highlight }}
                      ></textarea>
                    </div>
                    <div className="form-submit">
                      <button 
                        type="submit" 
                        className="submit-btn" 
                        disabled={this.state.isSubmitting}
                        style={{ 
                          backgroundColor: theme.highlight,
                          color: "white",
                          opacity: this.state.isSubmitting ? 0.7 : 1
                        }}
                      >
                        {this.state.isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                    {this.state.formStatus && (
                      <div className="form-status" style={{ color: this.state.formStatus.includes('Failed') ? 'red' : 'green' }}>
                        {this.state.formStatus}
                      </div>
                    )}
                  </form>
                </div>
                
              </div>
            </div>
          </Fade>
          
          <Fade bottom duration={1000} distance="40px">
            <div className="location-btn-div">
              <Button
                text="View my location"
                newTab={false}
                onClick={this.openLocationInMaps}
                theme={theme}
              />
            </div>
          </Fade>

        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
