import React, { Component } from "react";
import TaskCard from "../TaskCard/TaskCard";

class Column extends Component {
    render() {
        return (
            <div className="column">
                <div className="card text-center">
                    <div className="dotMenu">
                        <img src="./images/dot-menu.svg" alt="menu" />
                    </div>
                    <h2>Title</h2>
                    <form>
                        <input type="text" placeholder="Create New Task" />
                    </form>
                </div>
                <TaskCard />
                <TaskCard />
            </div>
        );
    }
}
export default Column;
