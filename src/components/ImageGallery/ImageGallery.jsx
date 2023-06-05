import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function ImageGallery({ imagesArr }) {
  return (
    <ImageGalleryStyled>
      {imagesArr.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        ></GalleryItem>
      ))}
    </ImageGalleryStyled>
  );
}
