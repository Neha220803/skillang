import React from 'react'
import { Container, Col, Row, Card, CardBody, CardImg, CardTitle, CardText } from "react-bootstrap";
import '../../../index.css';
import '../../../App.css';
import './TypesAndEligiblity.css';
import eli1 from '../../../assets/images/landing/nurse-eli1.svg';
import eli2 from '../../../assets/images/landing/nurse-eli2.svg';
import eli3 from '../../../assets/images/landing/nurse-eli3.svg';
import eli4 from '../../../assets/images/landing/nurse-eli4.svg';



const eligibilityData = [
    { img: eli1, title: 'abcd', text: 'A recognized 3 years nursing diploma or Bachelor degree in nursing' },
    { img: eli2, title: 'abcd', text: 'Language proficiency proof in German (usually B2 level) via any authorized institutes (GOETHE / TELC / ECL/ OSD).' },
    { img: eli3, title: 'abcd', text: 'A valid nursing license from your home country. ' },
    { img: eli4, title: 'abcd', text: 'A certificate of professional qualification recognition, which we help you to facilitate.' },
];


const LoanEligiblity = () => {
    return (
        <div className='loan-eligible-bg d-flex justify-content-end align-items-center'>

            <Container className=' my-5 py-5 d-flex justify-content-end align-items-center flex-column '>
                <Row>
                    <div className='heading-big-medium text-content-primary text-center my-5'>
                        Eligibility and Requirements
                    </div>
                </Row>
                <Row>
                    {eligibilityData.map((item, index) => (
                        <Col key={index} lg={3} md={3} sm={12} xs={12} className='mb-4'>
                            <Card className='loan-eligible-cards'>

                                <CardImg src={item.img} alt={`Eligibility ${index + 1}`} className='loan-eligibility-img' />

                                <CardBody className='p-0'>
                                    <CardTitle >{item.title}</CardTitle>
                                    <CardText className='loan-eligible-cards-text paragraph-small-medium text-content-secondary'>{item.text}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default LoanEligiblity