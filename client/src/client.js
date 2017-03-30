import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //wrap react-redux with provider
import Layout from './components/Layout';
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
    <Layout />
    </Provider>, app)

// import App from './components/App';
// ReactDOM.render(<App />, app);