import React from 'react';
import { CardText, CardTitle, Container, Image, Col, Card, Row } from 'react-bootstrap';
import ntype1 from '../../../assets/images/nursing/nType1.png';
import ntype2 from '../../../assets/images/nursing/nType2.png';
import ntype3 from '../../../assets/images/nursing/nType3.png';
import ntype4 from '../../../assets/images/nursing/nType4.png';
import ntype5 from '../../../assets/images/nursing/nType5.png';
import ntype6 from '../../../assets/images/nursing/nType6.png';

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
      <Container className="py-5 my-5">
        <Row>
            <div>
              <div className="heading-big-medium">Types of Healthcare Facilities Hiring Nurses</div>
            </div>
     
          
            {nurseTypes.map((challenge, index) => (
              <Col lg={4} sm={12} xs={12} className='mt-4'>
              <Card key={index} className="why-us-card">
                <img src={challenge.img} alt='.' />
                <CardTitle className='why-us-card'>{challenge.title}</CardTitle>
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
