import React from 'react';
import { CardText, CardTitle, Container, Image, Col, Card, Row } from 'react-bootstrap';
import ntype1 from '../../../assets/images/nursing/nType1.png';
import ntype2 from '../../../assets/images/nursing/nType2.png';
import ntype3 from '../../../assets/images/nursing/nType3.png';
import ntype4 from '../../../assets/images/nursing/nType4.png';
import ntype5 from '../../../assets/images/nursing/nType5.png';
import ntype6 from '../../../assets/images/nursing/nType6.png';
import './typesHealthCareSection.css';

const nurseTypes = [
  { title: 'Hospital  (public and private)', img: ntype1},
  { title: 'Nursing Homes',  img: ntype2 },
  { title: 'Home Care  Services',  img: ntype3  },
  { title: 'Rehab Centers',  img: ntype4 },
  { title: 'Clinics & Specialized Medical Centres',  img: ntype5 },
  { title: 'Research & Academic Institutions',  img: ntype6  }
];

const TypesHealthCareSection = () => {
  return (
    <div>
      <Container className="">
        <Row>
            <div>
              <div className="heading-big-medium text-md-center px-2">Types of Healthcare Facilities Hiring Nurses</div>
            </div>
            {nurseTypes.map((challenge, index) => (
              <Col lg={4} sm={12} xs={12} className='mt-4'>
              <Card key={index} className="nurse-types-card">
                <img src={challenge.img} alt='.' className='nurse-types-card-img mb-3' />
                <CardTitle className='subheading-small-medium text-start'>{challenge.title}</CardTitle>
                {/* <CardText>{challenge.text}</CardText> */}
              </Card>
                </Col>
            ))}
        
        </Row>
      </Container>
    </div>
  );
};

export default TypesHealthCareSection;
