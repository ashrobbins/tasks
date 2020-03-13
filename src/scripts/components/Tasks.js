import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import base, { firebaseApp } from '../config/base';

import { Task, AddTaskForm } from '../components';

class Tasks extends React.Component {

    static propTypes = {
        storeTasks: PropTypes.func,
        tasks: PropTypes.object,
        updateFilter: PropTypes.func
    };

    componentDidMount() {
        this.handleUpdateStore();
    }

    handleUpdateStore = () => {
        const _this = this;

        firebaseApp.database().ref( 'tasks' ).once( 'value' ).then( function( data ) {
            _this.props.storeTasks( data.val() );
        });
    }

    addTask = ( name, tag ) => {
        firebaseApp.database().ref('tasks').push({
            complete: false,
            starred: false,
            name,
            tag
        });
        this.handleUpdateStore();
    }

    deleteTask = key => {
        firebaseApp.database().ref(`tasks/${ key }`).remove();
        this.handleUpdateStore();
    }

    updateCompletion = ( key, status ) => {
        firebaseApp.database().ref(`tasks/${ key }`).update({
            complete: status
        });
        this.handleUpdateStore();
    }

    updateStarred = ( key, status ) => {
        firebaseApp.database().ref(`tasks/${ key }`).update({
            starred: status
        });
        this.handleUpdateStore();
    }

    filterTasks = ( tasks ) => {
        const taskKeys = Object.keys( tasks.list );
        let taskList = Object.values( tasks.list );

        taskList.forEach( ( task, i ) => {
            task.key = taskKeys[ i ];
        });

        if ( tasks.filter ) {
            taskList = taskList.filter( task => task.tag === tasks.filter );
        }

        return taskList;
    }

    render() {
        if ( this.props.tasks.list ) {
            const { tasks } = this.props;
            const filteredTasks = this.filterTasks( tasks );
            const starredTasks = filteredTasks.filter( task => !task.complete && task.starred );
            const incompleteTasks = filteredTasks.filter( task => !task.complete && !task.starred );
            const completeTasks = filteredTasks.filter( task => task.complete );

            return (
                <Fragment>
                    <header className="site-header">
                        <div className="wrapper">
                            <h1>Tasks</h1>

                            <AddTaskForm addTask={ this.addTask } />
                        </div>
                    </header>
                    <main>
                        { tasks.filter ?
                            <section className="filter wrapper">
                                <span className="filter__name">{ tasks.filter }</span>
                                <i className="fas fa-times task__control" onClick={ () => this.props.updateFilter( null ) }></i>
                            </section> :
                        null }

                        { starredTasks.length ?
                            <section className="tasks tasks--starred wrapper">
                                <h2><i className="fas fa-star"></i>Priority</h2>
                                { starredTasks.map( ( task, i ) => <Task { ...this.props } task={ task } key={ task.key } deleteTask={ this.deleteTask } updateCompletion={ this.updateCompletion } updateStarred={ this.updateStarred } updateFilter={ this.props.updateFilter } /> )}
                            </section> :
                        null }

                        <section className="tasks tasks--incomplete wrapper">
                            <h2><i className="fas fa-clipboard-list"></i>Back burner</h2>
                            { incompleteTasks.map( ( task, i ) => <Task { ...this.props } task={ task } key={ task.key } deleteTask={ this.deleteTask } updateCompletion={ this.updateCompletion } updateStarred={ this.updateStarred } updateFilter={ this.props.updateFilter } /> )}
                        </section>

                        <section className="tasks tasks--complete wrapper">
                            <h2><i className="fas fa-check"></i>Completed</h2>
                            { completeTasks.map( ( task, i ) => <Task { ...this.props } task={ task } key={ task.key } deleteTask={ this.deleteTask } updateCompletion={ this.updateCompletion } updateFilter={ this.props.updateFilter } /> )}
                        </section>
                    </main>
                </Fragment>
            );
        }
        return (
                <header className="site-header">
                    <div className="wrapper">
                        <h1>Tasks</h1>

                        <AddTaskForm addTask={ this.addTask } />
                    </div>
                </header>
        );
        
    }
}

export default Tasks;
