import React from 'react';
import styled from 'styled-components';

const InputStyles = styled.input`
  background: var(--lighterGrayishCyan);
  font-size: var(--large);
  text-align: right;
  border: 2px solid var(--lighterGrayishCyan);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  ::placeholder {
    color: var(--darkerGrayishCyan);
  }
  :focus {
    outline: none;
    border: 2px solid var(--strongCyan);
  }
`;

const CustomInput = () => {
  return <InputStyles type='text' placeholder='Custom' />;
};

export default CustomInput;
