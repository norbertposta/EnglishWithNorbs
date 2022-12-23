import './Questions.scss';

import React, {useEffect, useState} from "react";
import { Button, Carousel, Stack, Col } from "react-bootstrap";

import { MyQUESTIONS } from "./questionImports.js";

  function Questions() {
    return (
      <>
      {/* map through MyQUESTIONS array */}
       { MyQUESTIONS.map(question => (
            <Col sm={12} md={6} lg={6} className="mt-5 me-auto ms-auto">
        <Carousel variant="dark" key={question.id} interval = {null} >
        <Carousel.Item>
          <img
            className=" w-100"           
            src={question.quest}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={question.answer}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
        </Col>
        ))}
        </>);
}


  export default Questions;


























// // mimic question and answer image
// const holderImg = (text) => <img className="image-class-name d-block mx-auto" src={`holder.js/400x400?text=${text}&bg=ffffff`} alt={text}/>

// const MyQUESTIONS = [
//     {quest: holderImg('Question1'), answer: holderImg('Question1A') },
//     {quest: holderImg('Question2'), answer: holderImg('Question2A') },
//     {quest: holderImg('Question3'), answer: holderImg('Question3A') },
//     {quest: holderImg('Question4'), answer: holderImg('Question4A') },
// ];


// function ControlledCarousel(question) {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };
//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect} variant={"dark"} interval={null}>
//             <Carousel.Item>
//                 {question.quest}
//             </Carousel.Item>
//             <Carousel.Item>
//                 {question.answer}
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// function Questions() {
//     // ensure the holderImg is functional with holder.js
//     useEffect(() => {
//         runHolder('image-class-name');
//     });

//     return (
//         <div className="App">
//             <React.Fragment>
//                 {MyQUESTIONS.map((questionData) =>
//                     ControlledCarousel(questionData)
//                 )}
//             </React.Fragment>
//         </div>
//     );
// }

// export default Questions;




// import React from 'react';
// import './Questions.scss';


// import Question1 from './img/Question1.png';
// import Question1A from './img/Question1A.png';
// import Question2 from './img/Question2.png';
// import Question2A from './img/Question2A.png';
// import Question3 from './img/Question3.png';
// import Question3A from './img/Question3A.png';
// import Question4 from './img/Question4.png';
// import Question4A from './img/Question4A.png';

// const MyQUESTIONS = [
//     {quest: Question1 , answer: Question1A },
//     {quest: Question2 , answer: Question2A },
//     {quest: Question3 , answer: Question3A },
//     {quest: Question4 , answer: Question4A }
//   ];

//   let carouselId;

// const Questions = () =>{
  


//  return (
   
// <>

// {MyQUESTIONS.map((questionData, idx) => {
// carouselId = `carousel-${idx}`;
//     const isActive = idx === 0;
//     const activeClass = isActive ? 'active' : '';
   
//   return (
// <div className="row question__row">
// <div id={carouselId} className="carousel carousel-dark slide question__carousel mb-5 mt-5 me-auto ms-auto" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target= {`#${carouselId}`} data-bs-slide-to="0" className={activeClass} aria-current={isActive} aria-label="Slide 1"></button>
//     <button type="button"  data-bs-target={`#${carouselId}`} data-bs-slide-to="1"  aria-label="Slide 2"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//         <img className="d-block w-100" src={questionData.quest} alt="First slide" />
//     </div>
//     <div className="carousel-item">
//         <img className="d-block w-100" src={questionData.answer} alt="Second slide" />
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button"  data-bs-target={`#${carouselId}`} data-bs-slide-to="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button"  data-bs-target={`#${carouselId}`} data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>


// </div>


//   );
// })}

// </>
//  )
// }


// export default Questions;