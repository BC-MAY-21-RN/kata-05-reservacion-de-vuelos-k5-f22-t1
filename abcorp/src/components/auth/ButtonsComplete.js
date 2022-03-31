import React from 'react';
import {ButtonGoogle} from './ButtonGoogle';
import {ButtonNormal} from './ButtonNormal';
import {TextOr} from './TextOr';

export const ButtonsComplete = ({
  formComplete,
  msgBtnNormal,
  msgBtnGoogle,
  navigation,
  form,
}) => {
  return (
    <>
      <ButtonNormal
        formComplete={formComplete}
        message={msgBtnNormal}
        navigation={navigation}
        form={form}
      />
      <TextOr />
      <ButtonGoogle
        formComplete={formComplete}
        message={msgBtnGoogle}
      />
    </>
  );
};
