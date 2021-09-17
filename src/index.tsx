
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import { BrowserRouter as Router } from 'react-router-dom';
import {StoreProvider} from 'easy-peasy'
import store from './store/StoreModel'
import {ThemeProvider} from '@material-ui/core'
import {theme, customTheme, darkTheme, gaggiTheme, purpTheme} from './theme/materialui_themes'


ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <StoreProvider store={store}>
      <React.StrictMode>
        <Router>
          <TodoApp />
        </Router>
      </React.StrictMode>
    </StoreProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
