import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

export default function NewsPage({ match }) {
  //카테고리가 선택되지 않았으면 기본값 all
  // match는 route -> component
  // router에서 :뒤의 값이 match.params에 담기게 됨
  // props는 component -> component 로 변수를 넘길 때 사용합니다.
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
