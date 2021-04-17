/**
 * Die Bausteine im Tetris werden Tetrominos benannt. 
 * In der original Variante des Spiels wurden sieben Tetrominos definiert. 
 * Die Tetrominos werden Aufgrund ihrer Ähnlichkeit mit den lateinischen Buchstaben (T, I, O, L, J, S, Z) angesprochen.
 */

/**
 * ███ ███
 * ███ ███
 *
 * @type {number[][]}
 */
 const O =  [
    [1, 1],
    [1, 1],
];

/**
 * ███
 * ███
 * ███
 * ███
 *
 * @type {number[][]}
 */
const I = [
    [0, 2, 0, 0],
    [0, 2, 0, 0],
    [0, 2, 0, 0],
    [0, 2, 0, 0]
];

/**
 * ███
 * ███
 * ███ ███
 *
 * @type {number[][]}
 */
const L = [
    [0, 3, 0],
    [0, 3, 0],
    [0, 3, 3]
];

/**
 *     ███
 *     ███
 * ███ ███
 *
 * @type {number[][]}
 */
const J = [
    [0, 4, 0],
    [0, 4, 0],
    [4, 4, 0]
];

/**
 *     ███ ███
 * ███ ███
 *
 * @type {number[][]}
 */
const S = [
    [0, 0, 0],
    [0, 5, 5],
    [5, 5, 0]
];

/**
 * ███ ███
 *     ███ ███
 *
 * @type {number[][]}
 */
const Z = [
    [0, 0, 0],
    [6, 6, 0],
    [0, 6, 6]
];

/**
 * ███ ███ ███
 *     ███
 *
 * @type {number[][]}
 */
const T = [
    [0, 0, 0],
    [7, 7, 7],
    [0, 7, 0]
];

const Bausteine = {
    O,
    I,
    J,
    L,
    S,
    Z,
    T
};