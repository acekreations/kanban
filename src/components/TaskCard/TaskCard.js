import React, { Component } from "react";

class TaskCard extends Component {
    render() {
        return (
            <div className="card">
                <span className="taskColorMarker" />
                <div className="dotMenu">
                    <img src="./images/dot-menu.svg" alt="menu" />
                </div>
                <p>Sed posuere consectetur est at lobortis.</p>
            </div>
        );
    }
}
export default TaskCard;
