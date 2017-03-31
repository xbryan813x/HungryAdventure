import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //wrap react-redux with provider
import Layout from './containers/Layout';
import store from './store';
import ContactForm from './components/searchForm';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
    <Layout />
    </Provider>, app)

