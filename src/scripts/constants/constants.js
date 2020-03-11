export const ROUTE_ID = {
    HOME: 'home',
    CREATE_TEAM: 'create-team',
    MY_TEAM: 'my-team',
    TRANSFERS: 'transfers',
    LEAGUES: 'leagues'
};

// RESPONSE STATUS CODES
export const RESPONSE_STATUS = {
    SUCCESS: 200
};

export const APP_CONTEXT = {
    HOME: 'home',
    CREATE_TEAM: 'create-team',
    MY_TEAM: 'my-team',
    TRANSFERS: 'transfers',
    LEAGUES: 'leagues'
};

export const PULLOUT_CONTEXT = {
    POINTS_LEAGUES: {
        key: 'points-leagues',
        label: 'Points / Leagues'
    }
};

// SQUAD ACTIONS
export const SQUAD_ACTIONS = {
    ADD_PLAYER: 'ADD_PLAYER',
    RESET_TEAM: 'RESET_TEAM',
    SUBMIT_TEAM: 'SUBMIT_TEAM',
    UPDATE_TEAM: 'UPDATE_TEAM'
};

// AVAILABLE ACTIONS ON PLAYER PROFILE MODAL
export const PROFILE_ACTIONS = {
    SET_CAPTAIN: 'SET_CAPTAIN',
    SET_VICE_CAPTAIN: 'SET_VICE_CAPTAIN',
    ADD_PLAYER: 'ADD_PLAYER',
    REMOVE_PLAYER: 'REMOVE_PLAYER',
    SUBSTITUTE_PLAYER: 'SUBSTITUTE_PLAYER',
    TRANSFER_PLAYER: 'TRANSFER_PLAYER',
    BACK_TO_LIST: 'BACK_TO_LIST'
};

// SQUAD MANAGEMENT
export const EMPTY_PICK = {
    playerId: null,
    slot: null,
    role: 0
};

export const ROLES = {
    NONE: 0,
    CAPTAIN: 1,
    VICE_CAPTAIN: 2
};

export const PRICE_QUANTILES_NUM = 10;
export const PLAYER_LIST_PAGE = 10;

// Modal
export const MODAL_CONTEXT = {
    PLAYER_LIST: 'PLAYER_LIST',
    PROFILE: 'PROFILE',
    SUBSTITUTION: 'SUBSTITUTION',
    SUBMIT_SQUAD: 'SUBMIT_SQUAD'
};

export const PULLOUT_OPEN_CLASS = 'pullout-enter-done';
export const MODAL_OPEN_CLASS = 'modal-enter-done';
export const NO_SCROLL_CLASS = 'u-body-no-scroll';
export const ESCAPE_KEYCODE = 27;
export const MODAL_CLOSE_TIMEOUT = 250;
export const PULLOUT_CLOSE_TIMEOUT = 250;

export const RANK_SHIFT = {
    UP: 'UP',// eslint-disable-line
    DOWN: 'DOWN',
    LEVEL: 'LEVEL'
};

export const HOURS_IN_DAY = 24;
export const ONE_SECOND = 1000;

export const TIME_UNIT = {
    MONTHS: 'months',
    DAYS: 'days',
    HOURS: 'hours',
    MINUTES: 'minutes',
    SECONDS: 'seconds'
};
