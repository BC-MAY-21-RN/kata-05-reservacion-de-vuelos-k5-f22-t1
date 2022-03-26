import React from 'react';
import {ButtonGoogle} from './ButtonGoogle';
import {ButtonNormal} from './ButtonNormal';
import {TextOr} from './TextOr';

export const ButtonsComplete = ({
  formComplete,
  msgBtnNormal,
  msgBtnGoogle,
  navigation,
  logginGoogle,
}) => {
  return (
    <>
      <ButtonNormal
        formComplete={formComplete}
        message={msgBtnNormal}
        navigation={navigation}
      />
      <TextOr />
      <ButtonGoogle
        formComplete={formComplete}
        message={msgBtnGoogle}
        logginGoogle={logginGoogle}
      />
    </>
  );
};
