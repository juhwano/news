import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 48rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export default function Spinner() {
  return (
    <SpinnerContainer>
      <Loader
        type="Oval"
        color="#3d66ba"
        height={30}
        width={30}
        timeout={3000}
      />
    </SpinnerContainer>
  );
}
