import '../styles/reset.css'
import '../styles/basic.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'reducers/store'

import Game from 'controllers/game'

const app = (
    <Provider store={ store }>
        <Game />
    </Provider>
);

render(app, document.getElementById('app'));
