import React from "react";
import navStyles from '../styles/Nav.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const renderArrowPrev = (clickHandler:any, hasPrev:any, label:any) => {
  if (!hasPrev) {
    return null;
  }
  return (
    <button
      type="button"
      onClick={clickHandler}
      title={label}
       className={`${navStyles.carouselArrow} ${navStyles.carouselArrowLeft}`}
      style={{ left: '10px', backgroundColor: 'orange' }}// Customized background color
    >
      Previous
    </button>
  );
};

const renderArrowNext = (clickHandler:any, hasNext:any, label:any) => {
  if (!hasNext) {
    return null;
  }
  return (
    <button
      type="button"
      onClick={clickHandler}
      title={label}
       className={`${navStyles.carouselArrow} ${navStyles.carouselArrowRight}`}
      style={{ right: '10px', backgroundColor: 'orange' }}// Customized background color
    >
      Next
    </button>
  );
};
const Nav = () => {
    
  return<>
  <section className={ `${navStyles.btn} ${"w-98 mx-auto h-11/12 mt-4"}`}>
{/* <div className={`${navStyles.heroImg} min-h-screen w-full`}>

</div>
<div className={`${navStyles.heroImgs} min-h-screen  w-full`}>

</div> */}
  <Carousel renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}>
                <div className={`${navStyles.heroImg} min-h-screen`}>
                    
                    <p className="legend">Legend 1</p>
                </div>
                <div  className={`${navStyles.heroImgs} min-h-screen`}>
                  
                    <p className="legend">Legend 2</p>
                </div>
                <div className={`${navStyles.heroImg} min-h-screen`}>
                    
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
</section>
</>};

export default Nav;
