import React from 'react';
import styled from 'styled-components';
import Bill from './Bill';
import SelectTip from './SelectTip';

const CalcContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
`;

const Calculator = () => {
  return (
    <CalcContainer>
      <Bill />
      <SelectTip />
    </CalcContainer>
  );
};

export default Calculator;
