import React from 'react';
import Piece from 'views/piece';

const renderBlock = (data, index) => <div key={ 'board__block__' + index } className={ 'piece__block piece__block--' + (data ? 'full' : 'empty') } />

const renderRow = (data, index) => <div key={ 'board__row__' + index } className='piece__row'>{ data.map((block, i) => renderBlock(block, i)) }</div>

export default ({ data, isDimmed }) => (
    <div className={ isDimmed ? 'board board--dimmed' : 'board' }>{ data.map((row, i) => renderRow(row, i)) }</div>
);
