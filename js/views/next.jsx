import React from 'react';
import Piece from 'views/piece';
import { pieces } from 'mappers/pieces';

const getPiece = () => pieces['F'][0];

export default ({ item }) => (
    <div className='next'><Piece matrix={ getPiece() } /></div>
);
