/**
 * @prettier
 * @flow
 */

import React from 'react';
import type { Node } from 'react';
import { IProps } from './types';

const Link = ({ children, to = '#', blank = false }: IProps): Node => (
  <a href={to} target={blank ? '_blank' : '_self'}>
    {children}
  </a>
);

export default Link;
