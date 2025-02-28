import React from 'react';
import './abroud_journey.css';

import backgroundImage from '../../../src/assets/images/work-abroad/journey/jorneybg.png';
import lineImage from '../../../src/assets/images/work-abroad/journey/line.png';
import mobileTimelineImage from '../../../src/assets/images/work-abroad/journey/verticalline.png'; // Your mobile timeline image

const AbroudJourney = () => {
    return (
        <div className="work-abroad-container">
            <div className="work-abroad-wrapper">
                <div className="work-abroad-header">
                    <h1>Work Abroad Journey</h1>
                    <p>Start your work abroad journey in 3 simple steps</p>
                </div>

                <div className="journey-content">
                    {/* Desktop View */}
                    <div className="journey-progress desktop-only">
                        <img src={lineImage} alt="Progress Line" className="progress-line-image" />
                    </div>

                    {/* Mobile View */}
                    <div className="mobile-journey mobile-only">
                        <img
                            src={mobileTimelineImage}
                            alt="Mobile Timeline"
                            className="mobile-timeline-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbroudJourney;