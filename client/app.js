import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './Layout'
import store from './redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a4d14',
    },
    secondary: {
      main: '#8c1c13',
    },
    tertiary: {
      main: '#0b4f6c',
    }
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)