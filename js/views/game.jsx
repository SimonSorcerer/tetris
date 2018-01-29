import React from 'react';

import Score from 'controllers/score';
import Timer from 'controllers/timer';
import Next from 'controllers/next';
import Board from 'controllers/board';

const renderMenu = (startHandler) => (
    <div className='game__menu'>
        <button className='menu__start' onClick={ startHandler }>START</button>
    </div>
);

export default ({ gameIsRunning, startHandler }) => (
    <div className='game'>
        <div className='game__head'>
            <Score />
            <Next />
            <Timer />
        </div>
        <div className='game__main'>
            <Board />
            { gameIsRunning || renderMenu(startHandler) }
        </div>
    </div>
);
