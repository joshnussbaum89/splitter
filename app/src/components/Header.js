import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: block;
  margin: 1rem auto;
  text-align: center;
  width: 120px;
  word-wrap: break-word;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.6rem;
  line-height: 2.5rem;
  h1 {
    margin: 2rem 0;
  }
`;

const Header = () => {
  return (
    <Title>
      <h1>Splitter</h1>
    </Title>
  );
};

export default Header;
