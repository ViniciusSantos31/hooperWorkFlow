import React, { useState } from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header/header';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';
import User from './components/User/user';
import { Body } from './components/Body/body';
import Navigation from './components/Navigation/navigation';

function App() {

  const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <User />
        <Navigation />
        <Body>

        </Body>
      </div>
    </ThemeProvider>
  );
}

export default App;
