import React from 'react';
import { Route } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
      <Route exact path="/:category?" component={NewsPage} />
      <Route exact path="/oauth" component={KakaoLogin} />
    </>
  );
}

export default App;
