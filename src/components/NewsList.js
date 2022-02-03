import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const NewsListBlock = styled.div`
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

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'http://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

export default function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async사용 함수 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;

        const response = await axios({
          method: 'GET',
          url: `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=db17f04bbe474b6996939c10d835c51f`,
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //대기 중일 때
  if (loading) {
    return <Spinner />;
  }
  //아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // if(error){
  //   return <NewsListBlock>에러 발생!</NewsListBlock>;
  // }

  //articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}
