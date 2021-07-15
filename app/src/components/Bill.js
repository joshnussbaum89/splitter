import React from 'react';
import styled from 'styled-components';

const BillStyles = styled.div`
  input {
    background: var(--lighterGrayishCyan);
    color: var(--darkCyan);
    text-align: right;
    font-size: var(--large);
    width: 97%;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border: 2px solid var(--lighterGrayishCyan);
    border-radius: 5px;
    ::placeholder {
      color: var(--darkerGrayishCyan);
    }
    :focus {
      outline: none;
      border: 2px solid var(--strongCyan);
    }
  }
`;

const Bill = () => {
  return (
    <BillStyles>
      <h2>Bill</h2>
      <input type='text' placeholder='140.42' autoFocus />
    </BillStyles>
  );
};

export default Bill;
