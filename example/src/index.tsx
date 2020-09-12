import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router basename={'espergen-character-sheets'}><App /></Router>, document.getElementById('root'))