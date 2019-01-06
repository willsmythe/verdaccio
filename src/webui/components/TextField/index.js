/**
 * @prettier
 * @flow
 */

import React from 'react';
import { TextFieldProps, default as MuiTextField } from '@material-ui/core/TextField';

const TextField = ({ InputProps, classes, placeholder, name, value, type, multiline, id, onChange }: TextFieldProps) => (
  <MuiTextField
    InputProps={{
      classes,
      ...InputProps,
    }}
    id={id}
    multiline={multiline}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

export default TextField;
