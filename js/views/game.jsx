import React from 'react';

import Score from 'views/score';
import Next from 'views/next';

export default ({ score }) => (
    <div className='game'>
        <div className='game__head'>
            <Score score={ score } />
            <Next item={ 'xxx' } />
        </div>
        <div className='game__main'></div>
    </div>
);
