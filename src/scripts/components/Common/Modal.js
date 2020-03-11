import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import * as constants from '../../constants';

class Modal extends React.Component {

    static propTypes = {
        app: PropTypes.object,
        modal: PropTypes.object,
        handleModalOpen: PropTypes.func,
        handleModalClose: PropTypes.func
    };

    componentDidMount = () => {
        const _this = this;

        document.addEventListener( 'keydown', function( event ) {
            if ( event.keyCode === constants.ESCAPE_KEYCODE ) {
                _this.props.handleModalClose();
            }
        });
    }

    bodyClick = event => {
        const elementClasses = event.target.className;

        if ( elementClasses.indexOf( constants.MODAL_OPEN_CLASS ) > -1 ) {
            this.props.handleModalClose();
        } else {
            return;
        }
    }

    render() {
        const { modal } = this.props;

        const modalClass = classNames( 'modal__container', {
            'modal__container--open': modal.isOpen
        } );

        const transitionOptions = {
            'in': this.props.modal.isOpen,
            'timeout': constants.MODAL_CLOSE_TIMEOUT,
            'classNames': 'modal',
            'unmountOnExit': true
        };

        return (
            <CSSTransition { ...transitionOptions }>
                <section className="modal" onClick={ event => this.bodyClick( event ) }>
                    <div className={ modalClass } onClick={ event => this.bodyClick( event ) }>
                        <span className="modal__close" onClick={ this.props.handleModalClose }>x</span>

                        {/* EVENTUALLY POPULATE WITH TASK DETAILS */}

                    </div>
                </section>
            </CSSTransition>
        );
    }
}

export default Modal;
