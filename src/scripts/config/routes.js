import { LandingPage, CreateTeam, MyTeam, Transfers, Leagues } from '../components';
import { ROUTE_ID } from '../constants';

export const ROUTES = [
    {
        id: ROUTE_ID.HOME,
        label: 'Home', // to be translated
        path: '/',
        component: LandingPage
    },
    {
        id: ROUTE_ID.CREATE_TEAM,
        label: 'Create Team', // to be translated
        path: '/create-team',
        component: CreateTeam
    },
    {
        id: ROUTE_ID.MY_TEAM,
        label: 'My Team', // to be translated
        path: '/my-team',
        component: MyTeam
    },
    {
        id: ROUTE_ID.TRANSFERS,
        label: 'Transfers', // to be translated
        path: '/transfers',
        component: Transfers
    },
    {
        id: ROUTE_ID.LEAGUES,
        label: 'Leagues', // to be translated
        path: '/leagues',
        component: Leagues
    }
];
