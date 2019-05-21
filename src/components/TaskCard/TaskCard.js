import React, { Component } from "react";

class TaskCard extends Component {
    render() {
        return (
            <div className="card">
                <span
                    className={
                        "taskColorMarker colorMarker" + this.props.data.color
                    }
                />
                <div className="dotMenu">
                    <img src="./images/dot-menu.svg" alt="menu" />
                </div>
                <p>{this.props.data.body}</p>
            </div>
        );
    }
}
export default TaskCard;
