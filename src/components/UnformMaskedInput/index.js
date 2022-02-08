/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@rocketseat/unform';
// import {StyledInput} from "./styles";

import MaskedInput from 'react-text-mask';

export default function UnformMaskedInput({ name, label, ...props }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'inputElement.value',
        clearValue: () => setValue(''),
      });
    }
  }, [fieldName, ref.current]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <MaskedInput
        id={fieldName}
        name={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
        {...props}
      />

      {error && <span>{error}</span>}
    </>
  );
}
