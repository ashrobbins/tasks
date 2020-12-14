import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

class Task extends React.Component {

    static propTypes = {
        task: PropTypes.object,
        deleteTask: PropTypes.func,
        updateCompletion: PropTypes.func,
        updateFilter: PropTypes.func,
        updateStarred: PropTypes.func
    };

    render() {
        const { task } = this.props;
        const completionControlClasses = classNames( 'fas task__control task__control--completion', {
            'fa-check': !task.complete,
            'fa-redo': task.complete
        });
        const starredControlClasses = classNames( 'fas fa-star task__control task__control--star', {
            'task__control--starred': task.starred
        });
        const tagClassNames = classNames( 'task__tag', {
            'task__tag--pl': task.tag === '#pl',
            'task__tag--lolf': task.tag === '#lolf',
            'task__tag--mm': task.tag === '#mm',
            'task__tag--line': task.tag === '#line',
            'task__tag--wr': task.tag === '#wr',
            'task__tag--lfc': task.tag === '#lfc',
            'task__tag--games': task.tag === '#games'
        });

        return (
            <Fragment>
                <li className="task">
                    { task.completedOn ? <span className="task__completed-on">{ task.completedOn }</span> : null }
                    <i className={ completionControlClasses } onClick={ () => this.props.updateCompletion( task.key, !task.complete ) }></i>
                    <span className="task__description">{ task.tag ? <span className={ tagClassNames } onClick={ () => this.props.updateFilter( task.tag ) }>{ task.tag }</span> : null }{ task.name }</span>
                    { !task.complete ? <i className={ starredControlClasses } onClick={ () => this.props.updateStarred( task.key, !task.starred ) }></i> : null }
                    <i className="fas fa-trash-alt task__control task__control--delete" onClick={ () => this.props.deleteTask( task.key ) }></i>
                </li>
            </Fragment>
        );
    }
}

export default Task;
