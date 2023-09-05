import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import ClimateProvider from './context/ClimateContext';

function Root() {
  return (
    // <ThemeContext.Provider
    //   value={{
    //     themeName,
    //     setThemeName
    //   }}
    // >
    //   <BrowserRouter>
    //     <App />
    //   </BrowserRouter>
    // </ThemeContext.Provider>
    <ClimateProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ClimateProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);