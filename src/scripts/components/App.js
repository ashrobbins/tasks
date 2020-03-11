import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Main from './Main';

function mapStateToProps( state ) {
    return {
        app: state.app,
        modal: state.modal,
        tasks: state.tasks
    };
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( actions, dispatch );
}

const App = connect( mapStateToProps, mapDispatchToProps )( Main );

export default App;
