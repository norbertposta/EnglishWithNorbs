import React, { useState, useRef } from 'react'
import './Vocabulary.scss';
import Vocab1 from './img/Vocab1.png';
import Vocab2 from './img/Vocab2.png';
import Vocab3 from './img/Vocab3.png';
import Vocab4 from './img/Vocab4.png';
import Vocab5 from './img/Vocab5.png';
import Vocab6 from './img/Vocab6.png';
import Vocab7 from './img/Vocab7.png';
import Vocab8 from './img/Vocab8.png';
import Vocab9 from './img/Vocab9.png';
import Vocab10 from './img/Vocab10.png';
import Vocab11 from './img/Vocab11.png';
import Vocab12 from './img/Vocab12.png';
import Vocab13 from './img/Vocab13.png';
import Vocab14 from './img/Vocab14.png';
import Vocab15 from './img/Vocab15.png';
import Vocab16 from './img/Vocab16.png';
import Vocab17 from './img/Vocab17.png';
import Vocab18 from './img/Vocab18.png';
import Vocab19 from './img/Vocab19.png';
import Vocab20 from './img/Vocab20.png';
import Vocab21 from './img/Vocab21.png';
import Vocab22 from './img/Vocab22.png';
import Vocab23 from './img/Vocab23.png';
import Vocab24 from './img/Vocab24.png';

import Modal from '../../partials/Modal/Modal';

const IMAGES = [
    {img: Vocab1 }, {img: Vocab2 } , {img: Vocab3 } ,  {img: Vocab4 },  {img: Vocab5 }, 
    {img: Vocab6 },  {img: Vocab7 },  {img: Vocab8 },  {img: Vocab9 },  {img: Vocab10 },
    {img: Vocab11 },  {img: Vocab12 },  {img: Vocab13 },  {img: Vocab14 },  {img: Vocab15 },
    {img: Vocab16 },  {img: Vocab17 },  {img: Vocab18 },  {img: Vocab19 },  {img: Vocab20 },
    {img: Vocab21 },  {img: Vocab22 },  {img: Vocab23 },  {img: Vocab24 }
];

interface Props {
  fn?: () => void;
} 



const Vocabulary: React.FC <Props>= ( ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageData, setImageData] = useState({img: ""});

  return (
    <>
      <div className="row ">
        {IMAGES.map((imageData, index) => {
          return (
            <>
              <div className="card vocabulary__card mt-5 mb-5 me-5 ms-5 col-sm-12 col-md-3" key={index}>
                <img
                  src={imageData.img}
                  alt="Vocab1"
                  className="card-img-top vocabulary--img"
                //  {/* send the clicked image data to the state */}

                  onClick={() => {setImageData(imageData);
                    setIsOpen(true);
                  }}
                />
                <div className="card-body">
                
                 

                </div>
              </div>
            </>
          );
        })}

{isOpen && (
                    //  bind the selected image data state to a data prop on Modal
                    <Modal
                      // data={isOpen} 
                      image={selectedImageData.img}
                      // We pass setIsOpen as a callback so when Modal closes it updates the Vocabulary component.
                      setIsOpen={setIsOpen}

                    />
                  )}


      </div>
    </>
  );
};




export default Vocabulary;

