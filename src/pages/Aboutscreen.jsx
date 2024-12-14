import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import iconMusic from '../assets/img/icon-music.png';
import iconProgram from '../assets/img/icon-programming.png';
import iconDesign from '../assets/img/icon-design.png';
import iconMovie from '../assets/img/icon-camera.png';

const hoby = [
  {
    name: 'Listening Music',
    icon: iconMusic,
  },
  {
    name: 'Watching Movie',
    icon: iconMovie,
  },
  {
    name: 'Programming',
    icon: iconProgram,
  },
  {
    name: 'Design',
    icon: iconDesign, 
  },
];

const Aboutus = () => {
  return (
    <div className="about-page">
      <Container>
        <h1 className="mb-5">About Me</h1>
        <Row>
          <Col lg={6} md={12}>
            <h3 className="typing-effect">
              These are my{' '}
              <span>
                <Typewriter words={['hobbies','favorites','interests']} loop={0} cursor cursorStyle="|" typeSpeed={100} deleteSpeed={70} delaySpeed={1000} />
              </span>
            </h3>
            <div className='hobbies'>
              {hoby.map((hoby, index) => (
                <div key={index} className="hobbies-item">
                  <img src={hoby.icon} alt="Design Icon" className="hoby-icon" />
                  <p className="hoby-name">{hoby.name}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={3} md={6} className="col-vertical-center">
            <div className="experience-content">
              <h1 className="text-center">1+</h1>
              <h2 className="text-center">
                Month <br /> Experience
              </h2>
            </div>
          </Col>
          <Col lg={3} md={6} className="col-vertical-center">
            <div className="experience-content">
              <h1 className="text-center">1+</h1>
              <h2 className="text-center">
                Project <br /> Completed
              </h2>
            </div>
          </Col>
        </Row>
        <div className="about-desc mb-5">
          <p>
            Hi there! I am majoring in informatics and am a second-year student at Telkom University. I'm really interested in artificial intelligence and developing websites. I have worked hard to merge these two interests throughout my
            academic career to provide innovative and useful technology solutions. My areas of interest in artificial intelligence are machine learning and natural language processing, whereas I concentrate on responsive design and
            intuitive user experiences while developing websites. I believe that combining these domains will provide several potential for developing clever and efficient applications.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Aboutus;
