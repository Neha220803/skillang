import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../study-abroad/abroad_destination.css';

// Import flags
import australiaFlag from "../../assets/images/work-abroad/countryflags/australia.png";
import canadaFlag from "../../assets/images/work-abroad/countryflags/canada.png";
import franceFlag from "../../assets/images/work-abroad/countryflags/canada.png";
import germanyFlag from "../../assets/images/work-abroad/countryflags/germany.png";
import irelandFlag from "../../assets/images/work-abroad/countryflags/canada.png";
import ukFlag from "../../assets/images/work-abroad/countryflags/uk.png";
import usaFlag from "../../assets/images/work-abroad/countryflags/usa.png";

const AbroadDestinations = () => {
    const destinations = [
        { name: 'UK', flag: ukFlag },
        { name: 'Germany', flag: germanyFlag },
        { name: 'USA', flag: usaFlag },
        { name: 'Australia', flag: australiaFlag },
        { name: 'Canada', flag: canadaFlag },
        { name: 'Ireland', flag: irelandFlag },
        { name: 'France', flag: franceFlag }
    ];

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div className="study-abroad-container">
            <div className="text-center mb-4">
                <h1 className="display-4 study-abroad-title">Popular Study Abroad <br /> Destinations</h1>
                <p className="lead study-abroad-subtitle">
                    Explore top countries offering world-class education, cultural diversity, and<br /> global career opportunities
                </p>
            </div>

            <div className="scroller w-100" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                    {destinations.map((destination, index) => (
                        <div key={index} className="destination-item">
                            <img
                                src={destination.flag}
                                alt={`${destination.name} flag`}
                                className="destination-flag"
                            />
                            <span className="destination-name  subheading-small-medium  mb-1">{destination.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AbroadDestinations;