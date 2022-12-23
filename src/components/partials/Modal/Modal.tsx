import React from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";

interface ModalType {
  image: string;
  setIsOpen: (isOpen: boolean) => void; // function
}



const Modal = ( props: ModalType) => {
  return (
    <>
    <div> 
      <div onClick={() => props.setIsOpen(false)} className={styles.ewn__darkBG}/>
      <div className={styles.ewn__centered}>
        <div className={styles.ewn__modal}>
          <div className={styles.ewn__modalHeader}>
            <h5 className={styles.ewn__heading}></h5>
          </div>
          <button className={styles.ewn__closeBtn} onClick={() => props.setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.ewn__modalContent}>
            <img className={styles.ewn_modal_img} src={props.image} alt="modal" />
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
