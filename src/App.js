import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import Home from './page/Home';
import { GlobalStyle, theme } from './config';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
