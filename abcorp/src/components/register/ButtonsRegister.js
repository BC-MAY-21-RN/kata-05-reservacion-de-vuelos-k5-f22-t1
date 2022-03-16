import React, {useState, useEffect} from 'react';
import {ButtonGoogle} from '../auth/ButtonGoogle';
import {ButtonNormal} from '../auth/ButtonNormal';
import {TextOr} from '../auth/TextOr';

export const ButtonsRegister = ({form, onChange}) => {
  const [formComplete, setFormComplete] = useState(false);
  const {firstName, email, password, checkedTerm} = form;

  const isFormComplete = () => {
    if (
      firstName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      checkedTerm
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  useEffect(() => {
    isFormComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);

  return (
    <>
      <ButtonNormal formComplete={formComplete} message="Sign up" />
      <TextOr />
      <ButtonGoogle formComplete={formComplete} message="Sign Up with Google" />
    </>
  );
};
