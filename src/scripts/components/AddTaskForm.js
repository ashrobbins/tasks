import React from 'react';
import PropTypes from 'prop-types';

class AddTaskForm extends React.Component {

    static propTypes = {
        addTask: PropTypes.func
    };

    nameRef = React.createRef();

    handleAddTask = event => {
        event.preventDefault();

        let name = this.nameRef.current.value;
        const tag = this.getTag( name ) || '';

        name = name.replace( tag, '' ).trim();

        this.props.addTask( name, tag );

        event.currentTarget.reset();
    }

    getTag = name => {
        let match;
        const regex = /#\w+/g;

        while ( ( match = regex.exec( name ) ) !== null ) {
            // This is necessary to avoid infinite loops with zero-width matches
            if ( match.index === regex.lastIndex ) {
                regex.lastIndex++;
            }

            return match[ 0 ];
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleAddTask } className="new-task-form">
                <input
                    className="new-task-form__input"
                    name="taskName"
                    ref={ this.nameRef }
                    type="text"
                    placeholder="What needs doing?"
                />
            </form>
        );
    }
}

export default AddTaskForm;
