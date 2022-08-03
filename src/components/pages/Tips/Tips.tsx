import React from 'react';
import './Tips.scss';
import { useState, useRef } from 'react'
import jsPDF from 'jspdf'

import Tip1 from './img/Tips1.png';
import Tip2 from './img/Tips2.png'; 
import Tip22 from './img/Tips2-2.png';
import Tip222 from './img/Tips2-2-2.png';
import Tip2222 from './img/Tips2-2-2-2.png';
import Tip3 from './img/Tips3.png';
import Tip31 from './img/Tips3-1.png';
import Tip32 from './img/Tips3-2.png';
import Tip33 from './img/Tips3-3.png';
import Tip4 from './img/Tips4.png';
import Tip42 from './img/Tips4-2.png';
import Tip5 from './img/Tips5.png';
import Tip6 from './img/Tips6.png';
import Tip7 from './img/Tips7.png';
import Tip8 from './img/Tips8.png';
import Tip9 from './img/Tips9.png';
import Tip92 from './img/Tips9-2.png';
import Modal from '../../partials/Modal/Modal';


const TIP1 = [{img: Tip1 }];
const TIP2 = [  {img: Tip2 }, {img: Tip22 }, {img: Tip222 }, {img: Tip2222 }];
const TIP3 = [  {img: Tip3 }, {img: Tip31 }, {img: Tip32 }, {img: Tip33 }]; 
const TIP4 = [  {img: Tip4 }, {img: Tip42 }];
const TIP5 = [  {img: Tip5 }];
const TIP6 = [  {img: Tip6 }];
const TIP7 = [  {img: Tip7 }];
const TIP8 = [  {img: Tip8 }];
const TIP9 = [  {img: Tip9 }, {img: Tip92 }];


const TIPS = [{TIP : TIP2}, {TIP : TIP3}, {TIP : TIP4}, {TIP : TIP5}, {TIP : TIP6}, {TIP : TIP7}, {TIP : TIP8}, {TIP : TIP9}];






const Tips = () => {
  const [isOpen, setIsOpen] = useState<any>()

    return <>

<div className='mt-5 mb-3'><h2> TIP #1 </h2> </div>

{TIP1.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as any)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }

    

    
    <div className="row ms-auto me-auto"> 
    <div className="mt-5 mb-3"><h2> TIP #2 </h2> </div>
    {TIP2.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as any)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }
     


<div className='mt-5 mb-3'><h2> TIP #3 </h2> </div>

{TIP3.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as any)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }

<div className='mt-5 mb-3'><h2> TIP #4 </h2> </div>

{TIP4.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto" >
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img"  onClick={() => setIsOpen(imageData as any)}/>
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }


<div className='mt-5 mb-3'><h2> TIP #5 </h2> </div>

{TIP5.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img"  onClick={() => setIsOpen(imageData as any)}/>
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }


<div className='mt-5 mb-3'><h2> TIP #6 </h2> </div>

{TIP6.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as any)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }



    



    <div className='mt-5 mb-3'><h2> TIP #7 </h2> </div>

{TIP7.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as any)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }


<div className='mt-5 mb-3'><h2> TIP #8 </h2> </div>

{TIP8.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as any)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }


<div className='mt-5 mb-3'><h2> TIP #9 </h2> </div>
    {TIP9.map(imageData => {
        return (
            <>
             <div className="card tips--card mt-5 mb-5 me-5 ms-5 ms-auto me-auto">
    <img src={imageData.img} alt="Vocab1" className="card-img-top tips--img" onClick={() => setIsOpen(imageData as unknown)} />
  <div className="card-body">
  </div>
</div>

            </>
     ) }  )    }

</div>



{Boolean(isOpen) && (
                    //  bind the selected image data state to a data prop on Modal
                    <Modal
                      // data ={isOpen } 
                      image={isOpen?.img}


                      
                      //  close the modal
                      setIsOpen={setIsOpen}
                      
                    />
                  )}
    
    </>
}






export default Tips;

