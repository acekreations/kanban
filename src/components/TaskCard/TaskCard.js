import React, { Component } from "react";

class TaskCard extends Component {
    state = {
        dotMenuActive: false
    };

    handleDotMenu() {
        this.setState({
            dotMenuActive: !this.state.dotMenuActive
        });
    }

    handleDragStart(e) {
        e.dataTransfer.setData(
            "text",
            `${this.props.columnIndex},${this.props.taskIndex}`
        );
    }

    handleDragEnter(e) {
        e.currentTarget.classList.add("taskCardDrop");
        const dataID = parseInt(e.target.getAttribute("data-id"));
        this.props.updateDropTarget(dataID);
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove("taskCardDrop");
    }

    handleDrop(e) {
        e.currentTarget.classList.remove("taskCardDrop");
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
                data-id={this.props.taskIndex}
                onDragStart={e => this.handleDragStart(e)}
                onDragEnter={e => this.handleDragEnter(e)}
                onDragLeave={e => this.handleDragLeave(e)}
                onDrop={e => this.handleDrop(e)}
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
