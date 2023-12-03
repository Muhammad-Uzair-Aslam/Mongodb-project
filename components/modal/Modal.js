'use client'
import { useState } from 'react';
import ProductModal from './ProductModal';

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
const handleFormSubmit=(formData)=>{
    console.log('Form data Submitted',formData)
    closeModal();

}
  return (
    <div>
      <button  onClick={openModal}>{props.title}</button>
      {isModalOpen&&<ProductModal  onClose={closeModal} onSubmit={handleFormSubmit}/>}
    </div>
  );
};

export default Modal;
