import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './src/app';
import store from './src/models/store';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#app'));
};

render(App);

if (module.hot) {
  module.hot.accept('./src/app', () => {
    const nextApp = require('./src/app').default;
    render(nextApp);
  });
}
