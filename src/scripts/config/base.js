import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyB7O9b8JOrhe-CaVbagUbU0UWlbvoMkg-g',
    authDomain: 'tasks-ed63d.firebaseapp.com',
    databaseURL: 'https://tasks-ed63d.firebaseio.com'
});

const base = Rebase.createClass( firebaseApp.database() );

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
