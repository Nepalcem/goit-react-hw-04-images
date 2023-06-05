import React from 'react';
import { ImageGalleryItemStyled } from './GalleryItem.styled';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export default class GalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { modalOpen } = this.state;

    return (
      <>
        <ImageGalleryItemStyled onClick={this.toggleModal}>
          <img src={webformatURL} alt="" />
        </ImageGalleryItemStyled>
        {modalOpen && (
          <Modal image={largeImageURL} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
