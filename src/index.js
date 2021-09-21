import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reduser from './redusers/RootReduser';
import { Provider } from 'react-redux';


// store for redux
const store = createStore(reduser);

ReactDOM.render(<Provider store={store}><App /></Provider> ,document.getElementById('root'));