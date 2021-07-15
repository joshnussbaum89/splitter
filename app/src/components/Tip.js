import React from 'react';
import styled from 'styled-components';

const TipStyles = styled.div`
  color: white;
  background: var(--veryDarkCyan);
  font-size: var(--large);
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    color: white;
    background: #26c0ab;
  }
`;

const Tip = ({ value }) => {
  return <TipStyles className='checked'>{value}</TipStyles>;
};

export default Tip;
