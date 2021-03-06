const A = [
    [[1, 1, 1, 1]],
    [[0, 1], [0, 1], [0, 1], [0, 1]]
];
const B = [
    [[1, 1], [1, 1]]
];
const C = [
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1], [1, 1], [1, 0]]
];
const D = [
    [[0, 1, 1], [1, 1, 0]],
    [[1, 0], [1, 1], [0, 1]]
];
const E = [
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1], [0, 1], [0, 1]],
    [[0, 0, 1], [1, 1, 1]],
    [[1, 0], [1, 0], [1, 1]]
];
const F = [
    [[1, 1, 1], [0, 0, 1]],
    [[0, 1], [0, 1], [1, 1]],
    [[1, 0, 0], [1, 1, 1]],
    [[1, 1], [1, 0], [1, 0]]
];

export const pieces = { A, B, C, D, E, F };

const getRandomRotation = (piece) => piece[Math.floor(Math.random() * piece.length)];

const getRandomPiece = () => Object.values(pieces)[Math.floor(Math.random() * Object.keys(pieces).length)];

export const getRandomPieceMatrix = () => getRandomRotation(getRandomPiece());