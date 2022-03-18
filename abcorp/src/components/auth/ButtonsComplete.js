import React from 'react';
import {ButtonGoogle} from './ButtonGoogle';
import {ButtonNormal} from './ButtonNormal';
import {TextOr} from './TextOr';

export const ButtonsComplete = ({formComplete, msgBtnNormal, msgBtnGoogle}) => {
  return (
    <>
      <ButtonNormal formComplete={formComplete} message={msgBtnNormal} />
      <TextOr />
      <ButtonGoogle formComplete={formComplete} message={msgBtnGoogle} />
    </>
  );
};
