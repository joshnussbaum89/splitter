import React from 'react';
import styled from 'styled-components';

const TipStyles = styled.div`
  :nth-child(-n + 5) {
    color: white;
    background: var(--veryDarkCyan);
  }

  background: var(--lighterGrayishCyan);
  font-size: var(--large);
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
`;

const Tip = ({ value }) => {
  return <TipStyles>{value}</TipStyles>;
};

export default Tip;
