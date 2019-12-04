import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Calendar from './Calendar';

const Center = styled.div`
  max-width: 702px;
  margin: 25px auto;

  background-color: #eeeeee;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eeeeee;
    padding: 0;

    height: 100%;
    font-family: Sans-Serif;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Center>
        <Calendar></Calendar>
      </Center>
    </React.Fragment>
  );
}

export default App;
