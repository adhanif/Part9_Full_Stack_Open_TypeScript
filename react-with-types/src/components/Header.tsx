import React from 'react';
import { HeaderProps } from '../types';


function Header(props: HeaderProps): JSX.Element {
  return <h1>{props.name}</h1>;
}

export default Header;
