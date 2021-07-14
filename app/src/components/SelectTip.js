import React from 'react';
import styled from 'styled-components';
import Tip from './Tip';

const TipContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
`;

const SelectTip = () => {
  const tipAmounts = ['5%', '10%', '15%', '25%', '50%', 'Custom'];

  return (
    <div>
      <h2>Select Tip %</h2>
      <TipContainer>
        {tipAmounts.map((value, index) => (
          <Tip id={index + 1} key={index} value={value} />
        ))}
      </TipContainer>
    </div>
  );
};

export default SelectTip;
