import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../components';

import * as constants from '../constants';

class Main extends React.Component {

    constructor( props ) {
        super( props );
    }

    static propTypes = {
        children: PropTypes.object,
        modal: PropTypes.object,
        openModal: PropTypes.func,
        closeModal: PropTypes.func,
        router: PropTypes.object
    };

    handleModalOpen = ( modalState = null ) => {
        this.props.openModal( modalState );
        document.body.classList.add( constants.NO_SCROLL_CLASS );
    }

    handleModalClose = () => {
        this.props.closeModal();

        setTimeout( () => {
            console.log( 'Closing modal' ); //eslint-disable-line
        }, constants.MODAL_CLOSE_TIMEOUT );

        document.body.classList.remove( constants.NO_SCROLL_CLASS );
    }

    render() {
        return (
            <Fragment>
                { React.cloneElement( this.props.children, { ...this.props, handleModalOpen: this.handleModalOpen } ) }
                <Modal { ...this.props } handleModalOpen={ this.handleModalOpen } handleModalClose={ this.handleModalClose } />
            </Fragment>
        );
    }
}

export default ( Main );
