import React from 'react';
import styled from 'styled-components';

const BillStyles = styled.div`
  input {
    background: var(--lighterGrayishCyan);
    color: var(--darkCyan);
    text-align: right;
    font-size: var(--large);
    font-weight: 700;
    width: 97%;
    margin: 1rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
  }
`;

const Bill = () => {
  return (
    <BillStyles>
      <h2>Bill</h2>
      <input type='text' />
    </BillStyles>
  );
};

export default Bill;
