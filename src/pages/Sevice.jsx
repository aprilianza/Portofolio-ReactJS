import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaJsSquare, FaReact, FaDatabase, FaPython, FaBootstrap, FaStream } from 'react-icons/fa';
import { SiFlutter, SiGoland, SiTailwindcss, SiTensorflow, SiVite } from 'react-icons/si';
import appdev from '../assets/img/appdev.jpg';
import data from '../assets/img/data.jpg';
import webdev from '../assets/img/webdev.jpg';

const services = [
  {
    title: 'Web Development',
    description: 'I provide full-stack web development services to build responsive web applications.',
    img: webdev,
  },
  {
    title: 'Data Engineering',
    description: 'Expertise in building scalable data pipelines and data warehouses to manage datasets.',
    img: data,
  },
  {
    title: 'Mobile Development',
    description: 'Developing high-quality mobile applications for both Android and iOS platforms.',
    img: appdev,
  },
];

const technologies = [
  { name: 'JavaScript', icon: <FaJsSquare color="#F0DB4F" /> },
  { name: 'React JS', icon: <FaReact color="#61DAFB" /> },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
  { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
  { name: 'Golang', icon: <SiGoland color="#00ADD8" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38B2AC" /> },
  { name: 'Python', icon: <FaPython color="#306998" /> },
  { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'Streamlit', icon: <FaStream color="#FF4B4B" /> },
  { name: 'Vite', icon: <SiVite color="#646CFF" /> },
];

const Services = () => {
  return (
    <div className="service-page">
      <Container>
        <div className="text-center">
          <h1>Area of Interest</h1>
          <p>I will help you with finding a solution and solve your problems.</p>
        </div>
        <Row xs={1} lg={3} className="g-4">
          {services.map((service, index) => (
            <Col key={index}>
              <Card className="service-card">
                <Card.Img variant="top" src={service.img} alt={`${service.title} image`} />
                <Card.Body className="service-card-body">
                  <Card.Title className="service-card-title text-center">{service.title}</Card.Title>
                  <Card.Text className="service-card-text">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row xs={1} lg={2} className="mt-5 mb-5">
          <Col className="col-vertical-center">
            <h1>Technologies I Use</h1>
          </Col>
          <Col>
            <div className="technologies">
              {technologies.map((tech, index) => (
                <div key={index} className="technology-item">
                  {tech.icon}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
