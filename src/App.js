import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Home from './page/Home';
import Footer from './components/Footer';
import { GlobalStyle, theme } from './config';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
