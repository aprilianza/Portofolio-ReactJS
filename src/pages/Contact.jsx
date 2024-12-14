import React, { useState } from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (!!errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { name, email, phone, message } = formData;
    const phoneNumber = '6285156168100';
    const textMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-page">
      <Container>
        <Row lg={2} xs={1}>
          <Col>
            <h1>Get in Touch</h1>
            <p>
              Have a question or a project in mind? I'd love to hear from you. <br />
              Let's chat and make something amazing together.
            </p>
            <div className="contact-icons">
              <div href="tel:+6281234567890" className="contact">
                <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
                <p>+6281234567890</p>
              </div>
              <div href="mailto:aprilianzamuhammadyusup@gmail.com" className="contact">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
                <p>aprilianzamuhammadyusup@gmail.com</p>
              </div>
            </div>
            <h4>Follow Me on :</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/aprilianzaa_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/aprilianza-yusup/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
              </a>
              <a href="https://github.com/aprilianza" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCCeZNEpDBUfqGqAJalJj7pA" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" className="icon" />
              </a>
            </div>
          </Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" isInvalid={!!errors.name} />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" isInvalid={!!errors.email} />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" isInvalid={!!errors.phone} />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={3} isInvalid={!!errors.message} />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>

              <button className="send" type="submit">
                Send <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
