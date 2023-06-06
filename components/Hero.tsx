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
     /*   className={`${navStyles.carouselArrow} ${navStyles.carouselArrowLeft}`}*/
    style={{   backgroundColor: 'orange' , position:'absolute', top:'50vh', left:'5vw', zIndex:'9', width:'50px',height:'50px' }}// Customized background color 
    >
    <svg style={{ }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
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
 /*       className={`${navStyles.carouselArrow} ${navStyles.carouselArrowRight}`}*/
   style={{ backgroundColor: 'orange', position:'absolute', top:'50vh', left:'85vw', width:'50px',height:'50px' }}// Customized background color 
    > <svg style={{marginRight:'auto', marginLeft:'auto'}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
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
  <Carousel  renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext} >
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
