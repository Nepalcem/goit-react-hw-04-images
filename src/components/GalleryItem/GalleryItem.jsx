import React, { useState } from 'react';
import { ImageGalleryItemStyled } from './GalleryItem.styled';
import Modal from 'components/Modal/Modal';

const GalleryItem = ({ webformatURL, largeImageURL }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ImageGalleryItemStyled onClick={() => setModalOpen(true)}>
        <img src={webformatURL} alt="" />
      </ImageGalleryItemStyled>
      {modalOpen && (
        <Modal image={largeImageURL} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default GalleryItem;
