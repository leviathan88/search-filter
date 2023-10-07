import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/index.scss"

import { ContextStore } from './context/useContext';
const root = document.getElementById('root')
const render = <ContextStore><App /></ContextStore>
ReactDOM.createRoot(root).render(render)