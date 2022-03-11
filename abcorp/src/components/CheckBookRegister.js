import React from 'react';
import {CheckBox} from '../components/CheckBox';

export const CheckBookRegister = ({form, onChange}) => {
  const {checkedTerm, checkedSubscribed} = form;
  const handleCheckTerm = (value, field) => {
    onChange(value === false ? true : false, field);
  };
  return (
    <>
      <CheckBox
        text="I agree to the Terms and Privacy Policy."
        checked={checkedTerm}
        change={() => handleCheckTerm(checkedTerm, 'checkedTerm')}
      />
      <CheckBox
        text="Subscribe for select product updated."
        checked={checkedSubscribed}
        change={() => handleCheckTerm(checkedSubscribed, 'checkedSubscribed')}
      />
    </>
  );
};
