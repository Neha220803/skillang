import React from 'react';
import './abroud_journey.css';
import lineImage from '../../../src/assets/images/work-abroad/journey/line.png';

const AbroudJourney = () => {
    return (
        <div className="work-abroad-container">
            <div className="work-abroad-wrapper ">
                <div className="text-center">
                    <div className='heading-big-medium'>Work Abroad Journey</div>
                    <div className="paragraph-big-medium text-content-secondary">Start your work abroad journey in 3 simple steps</div>
                </div>
                <div className="journey-content bg-primar">
                    {/* Desktop View - Keep as is */}
                    <div className="journey-progress desktop-onl">
                        <img src={lineImage} alt="Progress Line" className="img-fluid" />
                    </div>

                    {/* Mobile View - Exact match to the image */}
                    <div className="mobile-journey mobile-only">
                        <div className="mobile-timeline">
                            {/* First step - completed */}
                            <div className="mobile-step-container">
                                <div className="mobile-step-icon completed">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#00C170" />
                                        <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="mobile-step-text">
                                    <h3 className="active-step" style={{ color: "black" }}>Language & Test Prep</h3>
                                </div>
                            </div>

                            {/* First Connector Line - Green on top */}
                            <div className="mobile-connector-line first"></div>

                            {/* Second step - pending */}
                            <div className="mobile-step-container">
                                <div className="mobile-step-icon pending">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#EEEEEE" />
                                        <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="mobile-step-text">
                                    <h3 className="pending-step">CV Making, Application<br />& Interview Support</h3>
                                </div>
                            </div>

                            {/* Connector line */}
                            <div className="mobile-connector-line"></div>

                            {/* Third step - pending */}
                            <div className="mobile-step-container">
                                <div className="mobile-step-icon pending">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#EEEEEE" />
                                        <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="mobile-step-text">
                                    <h3 className="pending-step">Visa & Relocation Support</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbroudJourney;