import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './config';
import { LogBox } from 'react-native';
import theme from './resources/theme';


function App() {


  return (
    <ThemeProvider theme={theme}>
      {LogBox.ignoreAllLogs()}
      <Routes />
    </ThemeProvider>
  );
}

export default App;
