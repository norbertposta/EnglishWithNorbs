import React from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";




//Create reusable Modal component with the following props: image
// const Modal = ({ image, closeModal }) => {
//   return (
//     <div className={styles.modal}>
//       <div className={styles.modal__content}>
//         <img src={image} alt="modal" />
//         <button className={styles.modal__close} onClick={closeModal}>
//           <RiCloseLine />
//         </button>
//       </div>
//     </div>
//   );
// };

const Modal = ({ image, setIsOpen }: { image:string, setIsOpen: any }) => {
  return (
    <>
    <div> 
      <div onClick={() => setIsOpen(false)} className={styles.ewn__darkBG}/>
      <div className={styles.ewn__centered}>
        <div className={styles.ewn__modal}>
          <div className={styles.ewn__modalHeader}>
            <h5 className={styles.ewn__heading}></h5>
          </div>
          <button className={styles.ewn__closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.ewn__modalContent}>
            <img className={styles.ewn_modal_img} src={image} alt="modal" />
          </div>
          <div className={styles.ewn__modalActions}>
            <div className={styles.ewn__actionsContainer}>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Modal;
