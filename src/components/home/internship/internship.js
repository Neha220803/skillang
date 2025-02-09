import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import "../home-page.css";
import "../../../App.css";
import './internship.css';
import intern1 from '../../../images/home/intern-1.svg';
import intern2 from '../../../images/home/intern-2.svg';
import intern3 from '../../../images/home/intern-3.svg';
import intern4 from '../../../images/home/intern-4.svg';
import intern5 from '../../../images/home/intern-5.svg';
import intern6 from '../../../images/home/intern-6.svg';
import intern7 from '../../../images/home/intern-7.svg';
import intern8 from '../../../images/home/intern-8.svg';



const internCardData = [
  { title: "Job Oriented free study", img: intern1, desc:"No or minimal fee charged for the Ausbildung program in germany." },
  { title: "No Block Account needed", img: intern2, desc:"There is no block account required to show the fund backup" },
  { title: "Earn while you Learn", img: intern3, desc:"Students earn and gain industry experience through paid internships." },
  { title: "Job Oriented free study", img: intern4, desc:"Our language training programs provide expert coaching in German Language" },
  { title: "No Block Account needed", img: intern5, desc:"German Language proficiency: A2 level. 12th passed with above 50%. Age limit: Below 37 years." },
  { title: "Earn while you Learn", img: intern6, desc:"Our Employability program boosts PR chances in Germany." },
  { title: "Job Oriented free study", img: intern7, desc:"1.5 years stay-back for post-study work. Placement assistance for job opportunities." },
  { title: "No Block Account needed", img: intern8, desc:"Diverse industry options available. Over 300+ formal training programs offered." },
];



const InternshipSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
     <section className=' d-flex flex-column align-items-center justify-content-center'>
          <Container className='d-flex flex-column align-items-center justify-content-center gap-4'>
            <Row>
              <h1>Ausbildung (internship) Program in Germany</h1>
            </Row>
            {/* <Row className='d-flex align-items-center justify-content-center'> */}
              {/* <Slider {...settings}>
                    {internCardData.map((card, index) => (
                      <div key={index} className='mb-3'>
                        <Card className='intern-card d-flex flex-row border-0'>
                          <div className="intern-card-icon-wrapper">
                            <img src={card.img} alt="Icon" className="intern-card-icon" />
                          </div>
                          <CardBody className='d-flex flex-column justify-content-around align-items-end'>
                            <CardTitle>{card.title}</CardTitle>
                            <p className="card-desc">{card.desc}</p>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                    
              </Slider> */}
            {/* </Row> */}
            <Row>
               <button className='btn-primary-outline' onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}>Enquiry Now
              </button>

            </Row>
            </Container>
            </section>

    // <section className='d-flex flex-column align-items-center justify-content-center'>
    //   <Container className='d-flex flex-column align-items-center justify-content-center'>
    //     <Row className='d-flex flex-column align-items-center justify-content-center'>
    //       <h1>Ausbildung (internship) Program in Germany</h1>
    //     </Row>
    //     <Row className='d-flex align-items-center justify-content-center'>
    //       <Col>
    //         <Card>
    //           <CardTitle>Job Oriented free study</CardTitle>
    //           <CardBody>
    //             No or minimal fee charged for the Ausbildung program in germany.
    //           </CardBody>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card>
    //           <CardTitle>No Block Account needed</CardTitle>
    //           <CardBody>
    //             There is no block account required to show the fund backup
    //           </CardBody>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card>
    //           <CardTitle>Earn while you Learn</CardTitle>
    //           <CardBody>
    //             Students earn and gain industry experience through paid
    //             internships.
    //           </CardBody>
    //         </Card>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Card>
    //           <CardTitle>Language Training</CardTitle>
    //           <CardBody>
    //             Our language training programs provide expert coaching in German
    //             Language
    //           </CardBody>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card>
    //           <CardTitle>Eligibility</CardTitle>
    //           <CardBody>
    //             German Language proficiency: A2 level. 12th passed with above
    //             50%. Age limit: Below 37 years.
    //           </CardBody>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card>
    //           <CardTitle>PR Possibility</CardTitle>
    //           <CardBody>
    //             No or minimal fee charged for the Ausbildung program in germany.
    //           </CardBody>
    //         </Card>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Card>
    //           <CardTitle>Post Study Visa & Placement Assitance</CardTitle>
    //           <CardBody>
    //             1.5 years stay-back for post-study work. Placement assistance
    //             for job opportunities.
    //           </CardBody>
    //         </Card>
    //       </Col>
    //       <Col>
    //         <Card>
    //           <CardTitle>Diverse Industry Options</CardTitle>
    //           <CardBody>
    //             Diverse industry options available. Over 300+ formal training
    //             programs offered.
    //           </CardBody>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
  );
};

export default InternshipSection;
