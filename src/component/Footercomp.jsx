import React from 'react';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { Container } from 'react-bootstrap';
const technologies = [
  { name: 'React JS', icon: <FaReact color="#61DAFB" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'Vite', icon: <SiVite color="#646CFF" /> },
];
const Footer = () => {
  return (
    <div className='footer-section'>
      <Container>
        <h3 className="text-center pt-5 mb-4 ">This Portofolio Made With</h3>
        <div>
          <div className="technologies">
            {technologies.map((tech, index) => (
              <div key={index} className="technology-item">
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footerbar">
          <p>Aprilianza - Ⓒ2024 All Rights Reserved</p>
          <p>Designed and built by Aprilianza</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
