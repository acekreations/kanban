import React, { PureComponent } from "react";

class TaskCard extends PureComponent {
    state = {
        dotMenuActive: false
    };

    handleDotMenu() {
        this.setState({
            dotMenuActive: !this.state.dotMenuActive
        });
    }

    handleDragStart(e) {
        e.stopPropagation();
        e.dataTransfer.setData(
            "text",
            `task,${this.props.columnIndex},${this.props.taskIndex}`
        );
        this.props.updateDragType("task");
    }

    render() {
        return (
            <div
                className={
                    this.state.dotMenuActive
                        ? "cardUnactive card taskCard"
                        : "card taskCard"
                }
                draggable="true"
                onDragStart={e => this.handleDragStart(e)}
                data-dragtype="task"
            >
                <span
                    className={
                        "taskColorMarker colorMarker" + this.props.data.color
                    }
                />
                <div className="dotMenu" onClick={() => this.handleDotMenu()}>
                    <img src="./images/dot-menu.svg" alt="menu" />
                </div>
                <div
                    className={
                        this.state.dotMenuActive
                            ? "dotMenuDropdown"
                            : "dotMenuDropdown dotMenuDropdownHide"
                    }
                >
                    <ul>
                        <li>
                            <a href="#">Archive</a>
                        </li>
                        <li>Delete</li>
                    </ul>
                </div>
                <p className="taskContent">{this.props.data.body}</p>
            </div>
        );
    }
}
export default TaskCard;
