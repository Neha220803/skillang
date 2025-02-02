import React, { useEffect } from 'react';
import { Card, CardBody, CardFooter, CardTitle, Container } from 'react-bootstrap'
import '../home-page.css';
import '../../../App.css';
import './uni-partner.css';
import uni1 from '../../../images/home/uni-1.png';
import uni2 from '../../../images/home/uni-2.png';
import uni3 from '../../../images/home/uni-3.png';
import uni4 from '../../../images/home/uni-4.png';
import uni5 from '../../../images/home/uni-5.png';
import uni6 from '../../../images/home/uni-6.png';
import uni7 from '../../../images/home/uni-7.png';
import uni8 from '../../../images/home/uni-8.png';
import uni9 from '../../../images/home/uni-9.png';
import uni10 from '../../../images/home/uni-10.png';
import uni11 from '../../../images/home/uni-11.png';
import uni12 from '../../../images/home/uni-12.png';
import uni13 from '../../../images/home/uni-13.png';
import uni14 from '../../../images/home/uni-14.png';
import uni15 from '../../../images/home/uni-15.png';
import uni16 from '../../../images/home/uni-16.png';


const ScrollEle = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
          scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);
    
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
    
            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true);
              duplicatedItem.setAttribute("aria-hidden", true);
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
      }, []);
    
      return (
        <div className="scroller" data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            <img src={uni1} alt="partner1" />
            <img src={uni2} alt="partner2" />
            <img src={uni3} alt="partner3" />
            <img src={uni4} alt="partner4" />
            <img src={uni5} alt="partner5" />
            <img src={uni6} alt="partner6" />
            <img src={uni7} alt="partner1" />
            <img src={uni8} alt="partner2" />
            <img src={uni9} alt="partner3" />
            <img src={uni10} alt="partner4" />
            <img src={uni11} alt="partner5" />
            <img src={uni12} alt="partner6" />
            <img src={uni13} alt="partner1" />
            <img src={uni14} alt="partner2" />
            <img src={uni15} alt="partner3" />
            <img src={uni16} alt="partner4" />
    
          </div>
        </div>
      );
    };

export default ScrollEle