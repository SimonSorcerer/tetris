import React from 'react';

const renderBlock = (isFull) => {
    const className = !!isFull ? 'piece__block' : 'piece__block piece__empty';
    return <div className={ className } />;
};

const renderRow = ( rowMatrix ) => {
    const className='piece__row piece__row__' + rowMatrix.length;
    return <div className={ className }>{ rowMatrix.map(block => renderBlock(block)) }</div>;
}

export default ({ matrix }) => {
    return (
        <div className='piece'>
            { matrix.map(row => renderRow(row)) }
        </div>
    );
};