import React from 'react';

const renderBlock = (isFull, index) => {
    const className = !!isFull ? 'piece__block' : 'piece__block piece__block--empty';
    return <div key={ 'block_' + index } className={ className } />;
};

const renderRow = ( rowMatrix, index ) => <div key={ 'row_' + index } className='piece__row'>{ rowMatrix.map((block, i) => renderBlock(block, i)) }</div>;

export default ({ matrix }) => {
    return (
        <div className='piece'>
            { matrix.map((row, i) => renderRow(row, i)) }
        </div>
    );
};