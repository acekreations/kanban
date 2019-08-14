import React, { PureComponent } from "react";
import "dom-slider";

import TaskDrawer from "../TaskDrawer/TaskDrawer";

class TaskCard extends PureComponent {
    state = {
        dotMenuActive: false,
        taskDrawerOpen: false
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
        e.target.classList.add("taskCardDrag");
    }

    handleDragEnd(e) {
        e.target.classList.remove("taskCardDrag");
    }

    handleTaskDrawer() {
        if (this.state.taskDrawerOpen) {
            const td = document.querySelector(
                `#td${this.props.columnIndex}${this.props.taskIndex}`
            );
            td.slideUp().then(() => flipState.call(this));
        } else {
            flipState.call(this);
        }

        function flipState() {
            this.setState({
                taskDrawerOpen: !this.state.taskDrawerOpen
            });
        }
    }

    render() {
        return (
            <div>
                <div
                    className={
                        this.state.dotMenuActive
                            ? "cardUnactive card taskCard"
                            : "card taskCard"
                    }
                    draggable="true"
                    onDragStart={e => this.handleDragStart(e)}
                    onDragEnd={e => this.handleDragEnd(e)}
                    data-dragtype="task"
                    onClick={this.handleTaskDrawer.bind(this)}
                >
                    <span
                        className={
                            "taskColorMarker colorMarker" +
                            this.props.data.color
                        }
                    />
                    <div
                        className="dotMenu"
                        onClick={() => this.handleDotMenu()}
                    >
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
                {this.state.taskDrawerOpen && (
                    <TaskDrawer
                        id={`td${this.props.columnIndex}${
                            this.props.taskIndex
                        }`}
                        data={this.props.data}
                    />
                )}
            </div>
        );
    }
}
export default TaskCard;
