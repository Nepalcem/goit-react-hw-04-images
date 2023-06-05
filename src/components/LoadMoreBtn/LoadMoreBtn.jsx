import React from 'react';
import { LoadMoreBtnStyled } from './LoadMoreBtn.styled';

export default function LoadMoreBtn({ onloadMore }) {
  return <LoadMoreBtnStyled onClick={onloadMore}>Load More</LoadMoreBtnStyled>;
}
