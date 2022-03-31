import React, {useState, useEffect} from 'react';
import {ButtonsComplete} from '../auth/ButtonsComplete';

export const ButtonsRegister = ({form, onChange, navigation}) => {
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
      <ButtonsComplete
        navigation={navigation}
        formComplete={formComplete}
        msgBtnNormal="Sign up"
        msgBtnGoogle="Sign Up with Google"
        form={form}
      />
    </>
  );
};
