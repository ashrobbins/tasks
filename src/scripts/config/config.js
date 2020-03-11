/* eslint-disable no-magic-numbers */

export const SQUAD_SIZE = 10;
export const STARTING_BUDGET = 10000;

export const STARTING_SLOTS = [ 1, 2, 3, 4, 5 ];
export const SUB_SLOTS = [ 6, 7, 8, 9, 10 ];

export const FORMATIONS = {
    LOL_DEFAULT: [
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5
    ],
    442: [
        1,
        2, 2, 2, 2,
        3, 3, 3, 3,
        4, 4,
        1, 2, 3, 3, 4
    ]
};

export const SQUAD_REQUIREMENTS = {
    maxClubPlayers: 2, // null if no cap to be applied
    captain: true,
    viceCaptain: false
};

/* eslint-enable no-magic-numbers */
