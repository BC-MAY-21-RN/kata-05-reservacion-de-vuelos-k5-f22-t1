import React, {useState, useEffect} from 'react';
import {ButtonGoogle} from '../auth/ButtonGoogle';
import {ButtonNormal} from '../auth/ButtonNormal';
import {TextOr} from '../auth/TextOr';

export const ButtonsLogin = ({form, onChange}) => {
  const [formComplete, setFormComplete] = useState(false);
  const {email, password} = form;

  const isFormComplete = () => {
    if (email.length > 0 && password.length > 0) {
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
      <ButtonNormal formComplete={formComplete} message="Log in" />
      <TextOr />
      <ButtonGoogle formComplete={formComplete} message="Log In with Google" />
    </>
  );
};
