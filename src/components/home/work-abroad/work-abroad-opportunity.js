import React from 'react'; 
import { CardTitle, Container, Card, Row, Col, CardBody, CardText, CardImg } from 'react-bootstrap';
import '../../../App.css';
import './work-abroad-opportunity.css';
import '../../../index.css';
import work1 from '../../../assets/images/home/workAbroadCard1.jpg';
import work2 from '../../../assets/images/home/workAbroadCard2.jpg';
import work3 from '../../../assets/images/home/workAbroadCard3.jpg';
import work4 from '../../../assets/icons/home/electrical.svg';
import work5 from '../../../assets/icons/home/plumbing.svg';
import work6 from '../../../assets/icons/home/vpaintin.svg';
import work7 from '../../../assets/icons/home/automobile.svg';
import work8 from '../../../assets/icons/home/mechanical.svg';
import work9 from '../../../assets/icons/home/welding.svg';

const primCardData = [
  { title: "Nursing & Healthcare", img: work1, color: "#FCEBC3", btnType:"btn-secondary", colSize: 6, desc: 'We specialize in placing skilled nurses and healthcare professionals in abroad. We make the process seamless for both candidate and Employer.',id: "wac1" },
  { title: "Hospitality Management", img: work2, color: "#FFFFFF",btnType:"btn-secondary-outline", colSize: 3,desc:"We connect skilled IT professionals with leading global companies. From software engineers to tech specialists, we match talent with the right opportunities seamlessly and efficiently",id: "wac2" },
  { title: "Information Technology", img: work3, color: "#FFFFFF",btnType:"btn-secondary-outline", colSize: 3, desc: 'We connect world-class talent with leading hotels, resorts, and restaurants abroad. From chefs to managers and all other positions.',id: "wac3" }
];

const WorkAbroadOpportunity = () => {
  const secCardData = [
    { img: work4, text: "Electrical" },
    { img: work5, text: "Plumbing" },
    { img: work6, text: "Vehicle Painting" },
    { img: work7, text: "Automobile" },
    { img: work8, text: "Mechanical" },
    { img: work9, text: "Heavy Welding" },
  ];

  return (
    <section className='d-flex flex-column align-items-center justify-content-center'>
      <Container className='p-0 m-0 d-flex flex-column align-items-center justify-content-center bg-primar w-100'>
        <div className='work-abroad-bg-card align-items-center justify-content-center mb-5'>
          <Row className='mb-2 m-0'>
            <div className='heading-big-medium text-content-primary text-center'>Work Abroad Opportunities</div>
          </Row>
          <Row className="gy-3">
            {primCardData.map((card, index) => (
              <Col key={index} lg={card.colSize} md={6} sm={12} xs={12}>
                <Card className='prim-card d-flex border-0 mb-2' id={card.id} style={{ backgroundColor: card.color } }>
                  <Card.Img variant="top" className='work-card-img' src={card.img} alt="Card image" />
                  <CardBody className='d-flex flex-column justify-content-around px-1 pt-2 py-0'>
                    <CardTitle className='subheading-small-medium'>{card.title}</CardTitle>
                    <CardText className='paragraph-small-regular'>{card.desc}</CardText>
                    <div className='w-sm-100'>
                      <button className={`${card.btnType} w-sm-100`} onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }}>Know more</button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="w-100">
          <Row className='bg-primar w-100 mx-0'>
            <Col lg={8} md={4} className="work-abroad-left-bg flex-column text-white d-flex align-items-end justify-content-start py-4 text-start">
              <div className='work-ops-textwrap'>
                <div className='text-white heading-small-medium'>Diverse Range of Opportunities</div>
                <div className='text-white paragraph-small-medium my-2'>We help you choose from large range of employment opportunities</div>
                <div>
                  <button className='btn-primary'>
                    Apply Now
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={4}  md={8}>
              <div className='work-abroad-right-bg ' >              
              <Row className='g-3 w-100'>
                {secCardData.map((service, index) => (
                  <Col
                    key={index}
                    className="mb-3 "
                    lg={6} sm={6} xs={6}
                  >
                    <Card className="work-abroad-card flex-column">
                      <CardImg variant='top' src={service.img} alt={`Reason ${index + 1}`} className='work-abroad-card-img' />
                      <CardBody className='p-0'>
                        <Card.Text className="paragraph-small-medium text-content-secondary">
                          <div className='paragraph-small-medium text-content-secondary work-abroad-card-text'>{service.text}</div>
                        </Card.Text>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
               </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WorkAbroadOpportunity;