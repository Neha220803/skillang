import React, { useState } from 'react';
import '../indemand-courses/indemand_course.css';
import businessAdminImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import engineeringImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import computerScienceImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import dataAnalyticsImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import marketingImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import uiuxImage from '../../../assets/images/study-abroad/indemandcardcontent.png';
import backgroundImage from '../../../assets/images/study-abroad/demandcoursebg.png';

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
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="content-wrapper">
                <div className="text-content">
                    <h2>In-Demand Courses & Career Paths</h2>
                    <p>Each destination offers unique opportunities and challenges. We provide tailored guidance on job markets, salary expectations, cultural norms, and legal requirements for working abroad.</p>
                    <button className="cta-button">Know More</button>
                </div>

                <div className="courses-section">
                    <div className="courses-grid">
                        {displayedCourses.map((course, index) => (
                            <div key={index} className="course-card">
                                <div className="card-image-wrapper">
                                    <img src={course.image} alt={course.title} className="course-image" />
                                </div>
                                <div className="course-details">
                                    <h3>{course.title}</h3>
                                    <p className="career-paths">Career Paths</p>
                                    <p className="career-specializations">{course.paths}</p>
                                </div>
                            </div>
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
