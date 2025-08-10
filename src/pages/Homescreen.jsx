import { Col, Row, Container } from 'react-bootstrap';
import myimage from '../assets/img/my_photo.png';

const Home = () => {
  return (
    <div className="homepage">
      <Container className="hero-section">
        <Row className="hero-content">
          <Col lg={6}>
            <h1 className="name mb-3">Hallo, I'm Aprilianza,</h1>
            <h1 className="job mb-3">
              Informatics<br></br>Student
            </h1>
            <h1 className="name mb-3">Telkom University</h1>
            <div className='download-button'>
              <a href="/Aprilianza.pdf" download>
                <button className="cv">Download CV</button>
              </a>
            </div>
          </Col>
          <Col className="col-vertical-center" lg={6}>
            <img src={myimage} alt="My Photo" className="myimage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
