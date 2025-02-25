import React from "react";
import { Container, Card } from "react-bootstrap";
import australiaImage from "../../assets/images/work-abroad/countryaustralia.png";
import canadaImage from "../../assets/images/work-abroad/countrycanada.png";
import franceImage from "../../assets/images/work-abroad/countryfrance.png";
import germanyImage from "../../assets/images/work-abroad/countrygermany.png";
import irelandImage from "../../assets/images/work-abroad/countryireland.png";
import ukImage from "../../assets/images/work-abroad/countryuk.png";
import usaImage from "../../assets/images/work-abroad/countryusa.png";
import "../home/home-page.css";
import "../home/header/home-header.css";
import "../../../src/index.css";

import "../../../src/App.css";

const countries = [
    { name: "Germany", description: "A thriving economy with jobs in Nursing, IT, and Engineering. Enjoy a balanced work-life and competitive pay.", image: germanyImage },
    { name: "United Kingdom", description: "A global leader in healthcare, finance, and tech, offering competitive salaries and access to top-notch education.", image: ukImage },
    { name: "United States of America", description: "A land of opportunity with high-paying jobs in healthcare, IT, and business, known for innovation and career growth.", image: usaImage },
    { name: "Australia", description: "A robust economy with jobs in healthcare, IT, and engineering, offering high wages and solid worker protections.", image: australiaImage },
    { name: "Canada", description: "A diverse job market in nursing, IT, and trades, offering high salaries and a welcoming environment.", image: canadaImage },
    { name: "Ireland", description: "A booming economy with demand in healthcare, pharma, and tech, featuring high wages and a friendly culture.", image: irelandImage },
    { name: "France", description: "A hub for healthcare, hospitality, and tech, known for its rich culture and excellent work-life balance.", image: franceImage },
];

const CountriesWeServe = () => {
    return (
        <section className="bg-white py-5">
            <Container>
                <div className="text-center mb-4">
                    <h2 className="heading-small-medium text-content-primary">Countries We Serve</h2>
                    <p className="paragraph-small-regular text-content-secondary">
                        Each destination offers unique opportunities and challenges. We provide tailored guidance on job markets, salary expectations, cultural norms, and legal requirements for working abroad.
                    </p>
                </div>

                {/* Scrollable container */}
                <div
    className="d-flex overflow-auto pb-3"
    style={{
        scrollSnapType: "x mandatory",
        gap: "16px",
        whiteSpace: "nowrap",
        paddingBottom: "10px",
        overflowX: "auto", // Enable horizontal scrolling
        scrollbarWidth: "none", // Hide scrollbar in Firefox
        msOverflowStyle: "none", // Hide scrollbar in Internet Explorer and Edge
    }}
    onScroll={(e) => {
        e.target.style.WebkitOverflowScrolling = "touch"; // Smooth scrolling for iOS
    }}
>

                    {countries.map((country, index) => (
                        <Card
                            key={index}
                            className="shadow-sm border bg-grey rounded flex-shrink-0 d-flex flex-row align-items-center"
                            style={{
                                width: "619px",
                                height: "205px",
                                borderRadius: "16px",
                                borderWidth: "1px",
                                padding: "16px",
                                scrollSnapAlign: "start",
                            }}
                        >
                            {/* Country Image */}
                            <Card.Img
                                src={country.image}
                                className="rounded"
                                style={{
                                    width: "286px",
                                    height: "173px",
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />

                            {/* Country Text */}
                            <Card.Body
                                className="d-flex flex-column align-items-start"
                                style={{
                                    width: "285px",
                                    height: "173px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <h5 className="subheading-small-medium text-content-primary">{country.name}</h5>
                                <p
                                    className="paragraph-small-regular text-content-secondary m-0"
                                    style={{
                                        maxWidth: "100%",
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        // WebkitLineClamp: 3, // Limit to 3-4 lines
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {country.description}
                                </p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );

};

export default CountriesWeServe;
