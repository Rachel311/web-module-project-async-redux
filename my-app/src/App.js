import React from 'react';
import './App.css';
import styled from 'styled-components';

import Music from './components/Music';

const Header = styled.header`
background-color: #C0C0C0;
`

const H1 = styled.h1`
color: black;
font-size: 100px;
display: flex;
justify-content: center;
align-items: flex-start;
`

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        
        <H1>Find a new genre of music to captivate!</H1>
        <Music />
      </Header>
    </div>
  );
}

export default App;
