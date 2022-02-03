import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 48rem;
  margin: 0 auto;
  @media screend and (max-width: 48rem) {
    width: 100%;
    overflow-x: auto;
  }
`;
// 특정 컴포넌트에 styled-component사용할 때는 styled(컴포넌트 이름)``
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const LoginWrap = styled.div`
  position: absolute;
  right: 3rem;
`;

const LoginBtn = styled.button`
  display: flex;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
  /* margin-bottom: 27px; */
  overflow: visible;

  padding: 12.375px 25.875px;
  height: 3rem;
  width: 14rem;
  font-size: 18px;
  line-height: 27px;
  vertical-align: middle;
  color: rgb(51, 51, 51);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(254, 229, 0);
  background-image: none;
  background-origin: padding-box;
  background-position: 0% 0%;
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  transition-delay: 0s, 0s;
  transition-duration: 0.15s, 0.15s;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;
  img {
    height: 24px;
    margin-right: 9px;
    vertical-align: middle;
  }
`;

const LoginLink = styled(Link)`
  text-decoration: none; ;
`;

export default function Categories() {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
      <LoginWrap>
        <LoginBtn>
          <LoginLink to="/oauth">
            <img
              src="https://careerly.co.kr/_next/static/images/icn_kakao-7df1f24555595c3382cda634c4ecf920.png"
              alt="kakao_login"
            />
            카카오로 시작하기
          </LoginLink>
        </LoginBtn>
      </LoginWrap>
    </CategoriesBlock>
  );
}
