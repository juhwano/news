import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

const ContentBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 48rem;
  margin: 0 auto;
  @media screend and (max-width: 48rem) {
    width: 100%;
    overflow-x: auto;
  }
`;

const { Kakao } = window;

export default function KakaoLogin() {
  const history = useHistory();
  useEffect(() => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);
      },
    });
  });

  return <ContentBlock>로그인</ContentBlock>;
}
