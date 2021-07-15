import React from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import Tip from './Tip';

const TipContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: minmax(100px, 400px) minmax(100px, 400px);
  grid-gap: 1.5rem;
`;

const SelectTip = () => {
  const tipAmounts = ['5%', '10%', '15%', '25%', '50%'];

  return (
    <div>
      <h2>Select Tip %</h2>
      <TipContainer>
        {tipAmounts.map((value, index) => (
          <Tip id={index + 1} key={index} value={value} />
        ))}
        <CustomInput />
      </TipContainer>
    </div>
  );
};

export default SelectTip;
