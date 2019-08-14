import React, { PureComponent } from "react";
import "dom-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import ColorMarker from "../TaskDrawer/TaskDrawer-ColorMarker";

class TaskDrawer extends PureComponent {
    state = {
        colorMarkers: [1, 2, 3, 4, 5, 6],
        textareaInput: this.props.data.body,
        color: this.props.data.color
    };
    componentDidMount() {
        const td = document.querySelector(`#${this.props.id}`);
        td.slideDown();
    }

    handleTextareaInput(e) {
        e.preventDefault();
        this.setState({
            textareaInput: e.target.value
        });
    }

    updateColor(color) {
        this.setState({
            color: color
        });
    }

    handleSave() {
        this.props.updateTask(
            this.props.columnIndex,
            this.props.taskIndex,
            this.state.textareaInput,
            this.state.color
        );
        this.props.handleTaskDrawer();
    }

    render() {
        return (
            <div
                className="card taskDrawer DOM-slider-hidden"
                id={this.props.id}
            >
                <textarea
                    value={this.state.textareaInput}
                    onChange={e => this.handleTextareaInput(e)}
                />
                <ul>
                    {this.state.colorMarkers.map(index => (
                        <ColorMarker
                            key={index}
                            colorClass={`${index}`}
                            updateColor={this.updateColor.bind(this)}
                        >
                            {parseInt(this.state.color) === index && (
                                <FontAwesomeIcon icon={faCheck} size="xs" />
                            )}
                        </ColorMarker>
                    ))}
                </ul>
                <button onClick={this.handleSave.bind(this)}>Save</button>
            </div>
        );
    }
}
export default TaskDrawer;
