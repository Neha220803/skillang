import React, { useEffect } from 'react';
import '../../../App.css';
import './uni-partner.css';
import uni1 from '../../../assets/images/home/uni-1.png';
import uni2 from '../../../assets/images/home/uni-2.png';
import uni3 from '../../../assets/images/home/uni-3.png';
import uni4 from '../../../assets/images/home/uni-4.png';
import uni5 from '../../../assets/images/home/uni-5.png';
import uni6 from '../../../assets/images/home/uni-6.png';
import uni7 from '../../../assets/images/home/uni-7.png';
import uni8 from '../../../assets/images/home/uni-8.png';
import uni9 from '../../../assets/images/home/uni-9.png';
import uni10 from '../../../assets/images/home/uni-10.png';
import uni11 from '../../../assets/images/home/uni-11.png';
import uni12 from '../../../assets/images/home/uni-12.png';
import uni13 from '../../../assets/images/home/uni-13.png';
import uni14 from '../../../assets/images/home/uni-14.png';
import uni15 from '../../../assets/images/home/uni-15.png';
import uni16 from '../../../assets/images/home/uni-16.png';

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

  // Split images into two rows
  const firstRowImages = [uni1, uni2, uni3, uni4, uni5, uni6, uni7, uni8];
  const secondRowImages = [uni9, uni10, uni11, uni12, uni13, uni14, uni15, uni16];

   return (
    <div className="scroll-container d-flex flex-column align-items-center justify-content-center">
      {/* First row - Right to Left */}
      <div className="scroller w-100" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          {firstRowImages.map((img, index) => (
            <img key={`row1-${index}`} src={img} alt={`partner-row1-${index + 1}`} className='scroller-img'/>
          ))}
        </div>
      </div>
      
      {/* Second row - Left to Right */}
      <div className="scroller w-100" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          {secondRowImages.map((img, index) => (
            <img key={`row2-${index}`} src={img} alt={`partner-row2-${index + 1}`} className='scroller-img'/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollEle;