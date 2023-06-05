import React, { useEffect } from 'react';
import { OverlayStyled } from './Overlay.styled';
import { ModalStyled } from './Modal.styled';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <OverlayStyled onClick={handleBackDropClick}>
      <ModalStyled>
        <img src={image} alt="" />
      </ModalStyled>
    </OverlayStyled>
  );
};

export default Modal;
