import React, { useState } from 'react';
import '../indemand-courses/indemand_course.css';
import businessAdminImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import engineeringImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import computerScienceImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import dataAnalyticsImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import marketingImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import uiuxImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import backgroundImage from '../../../assets/images/study-abroad/demandcoursebg.png';

import { Container, Card, CardBody, CardImg } from "react-bootstrap";
const courseData = [
    {
        title: 'Business Administration',
        paths: 'Marketing, Finance, HR',
        image: businessAdminImage
    },
    {
        title: 'Engineering',
        paths: 'Mechanical, Civil, Electrical, Aerospace',
        image: engineeringImage
    },
    {
        title: 'Computer Science',
        paths: 'Software Dev, AI, Cybersecurity',
        image: computerScienceImage
    },
    {
        title: 'Data Analytics',
        paths: 'Business Intelligence, Data Science',
        image: dataAnalyticsImage
    },
    {
        title: 'Marketing',
        paths: 'Digital Marketing, Brand Management',
        image: marketingImage
    },
    {
        title: 'UI/UX Design',
        paths: 'Product Design, User Research',
        image: uiuxImage
    }
];

const IndemandCourse = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev + 1) % 2);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev - 1 + 2) % 2);
    };

    const displayedCourses = courseData.slice(currentPage * 3, (currentPage + 1) * 3);

    return (
        <div
            className="in-demand-courses-container"
            // style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="">
                <div className="text-center">
                    <div className='heading-big-medium'>In-Demand Courses & Career Paths</div>
                    <div className='paragraph-bg-medium py-3'>Each destination offers unique opportunities and challenges. We provide tailored guidance on job markets, salary expectations, cultural norms, and legal requirements for working abroad.</div>
                    <button className="btn-primary">Know More</button>
                </div>
                <div className="courses-section">
                    <div className="courses-grid">
                        {displayedCourses.map((course, index) => (
                            <Card key={index} className="course-card">
                                <CardImg className="card-image-wrapper course-image" src={course.image} alt={course.title}  />
                                
                                <CardBody className="course-details d-flex flex-column justify-content-between">

                                    <div className='subheading-small-medium text-content-primaryInverse'>{course.title}</div>
                                    <div>
                                        <div className="career-paths ">Career Paths</div>
                                    <div className="career-specializations text-content-grey-500">{course.paths}</div>
                                    </div>
                                    
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    <div className="pagination-controls">
                        <button
                            className="pagination-button prev"
                            onClick={handlePrevPage}
                            disabled={currentPage === 0}
                        >
                            {'<'}
                        </button>
                        <button
                            className="pagination-button next"
                            onClick={handleNextPage}
                            disabled={currentPage === 1}
                        >
                            {'>'}
                        </button>
                    </div>

                    <div className="mobile-view-all">
                        <button className="view-all-button">View all</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndemandCourse;
