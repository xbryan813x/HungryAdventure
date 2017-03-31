import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //wrap react-redux with provider
import Layout from './components/Layout';
import store from './store';
import ContactForm from './components/searchForm';
import Routes from './Routes'

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, app)

