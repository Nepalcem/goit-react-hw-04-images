import React, { Component } from 'react';
import { OverlayStyled } from './Overlay.styled';
import { ModalStyled } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <OverlayStyled onClick={this.handleBackDropClick}>
        <ModalStyled>
          <img src={image} alt="" />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
