import React from 'react';

import ButtonComponent from './component/button';
import NewsItem from './component/newsItem';
import Loading from './component/loader';
import Badge from 'react-bootstrap/Badge'

function App() {
  return (
    <div className="App">
      <Badge variant="secondary">Redux Saga News App</Badge>
      <ButtonComponent/>
      <Loading/>
      <NewsItem/>
    </div>
  );
}

export default App;
