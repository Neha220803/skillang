import React from 'react';
import './abroud_journey.css';

import backgroundImage from '../../../src/assets/images/work-abroad/journey/jorneybg.png';
import languageImage from '../../../src/assets/images/work-abroad/journey/lang_test.png';
import cvImage from '../../../src/assets/images/work-abroad/journey/cvmake.png';
import visaImage from '../../../src/assets/images/work-abroad/journey/visa.png';
import lineImage from '../../../src/assets/images/work-abroad/journey/line.png';

const AbroudJourney = () => {
    return (
        <div className="work-abroad-container">
            <div className="work-abroad-wrapper">
                <div className="work-abroad-header">
                    <h1>Work Abroad Journey</h1>
                    <p>Start your   work abroad journey in 3 simple steps</p>
                </div>

                <div className="journey-content">
                    {/* Progress Line (placed first so images don't duplicate) */}
                    <div className="journey-progress">
                        <img src={lineImage} alt="Progress Line" className="progress-line-image" />
                    </div>

                    {/* Images Section */}
                    {/* <div className="journey-images">
                        <div className="journey-image-item">
                            <img src={languageImage} alt="Language & Test Prep" />
                            <p className="journey-label">Language & Test Prep</p>
                        </div>
                        <div className="journey-image-item">
                            <img src={cvImage} alt="CV Making Application" />
                            <p className="journey-label">CV Making, Application & Interview Support</p>
                        </div>
                        <div className="journey-image-item">
                            <img src={visaImage} alt="Visa & Relocation Support" />
                            <p className="journey-label">Visa & Relocation Support</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AbroudJourney;
