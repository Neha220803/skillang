import React from 'react'
import { Card, CardBody, CardFooter, CardTitle, Container } from 'react-bootstrap'
import './home-page.css';
import '../../App.css';

const StudyAbroadJourney = () => {
  return (
    <section>
        <Container>
            <h1>Study Abroad Journey</h1>
            <Container>
                <Card>
                    <CardTitle>
                    Explore Universities
                    and Courses
                    </CardTitle>
                    <CardBody>
                    Experts guide you based on interests and background.
                    Recommendations tailored to fit your budget.
                    </CardBody>
                    <CardFooter>
                        <button>Learn More</button>
                    </CardFooter>
                </Card>
            </Container>
        </Container>
    </section>
  )
}

export default StudyAbroadJourney