import React, {useState, useEffect} from 'react';
import {ButtonsComplete} from '../auth/ButtonsComplete';

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
      <ButtonsComplete
        formComplete={formComplete}
        msgBtnNormal="Log in"
        msgBtnGoogle="Log In with Google"
      />
    </>
  );
};
