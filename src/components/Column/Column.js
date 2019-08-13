import React, { Component } from "react";
import TaskCard from "../TaskCard/TaskCard";

class Column extends Component {
    handleDrop(e) {
        e.preventDefault();
        // console.log("dropped");
        // console.log(e.dataTransfer.getData("text"));
        this.props.updateDragDrop(
            e.dataTransfer.getData("text"),
            this.props.index
        );
        e.dataTransfer.clearData();
    }

    handleDragEnter(e) {
        e.currentTarget.classList.add("dummyCardDrop");
        const dataID = parseInt(e.target.getAttribute("data-id"));
        this.props.updateDropTarget(dataID);
    }

    render() {
        return (
            <div
                className="column"
                onDrop={e => this.handleDrop(e)}
                onDragOver={e => e.preventDefault()}
            >
                <div className="card text-center">
                    <div className="dotMenu">
                        <img src="./images/dot-menu.svg" alt="menu" />
                    </div>
                    <h2>{this.props.data.column_title}</h2>
                    <form>
                        <input type="text" placeholder="Create New Task" />
                    </form>
                </div>
                <div
                    className="dummyCard"
                    onDragEnter={this.handleDragEnter.bind(this)}
                    onDragLeave={e =>
                        e.currentTarget.classList.remove("dummyCardDrop")
                    }
                    onDrop={e =>
                        e.currentTarget.classList.remove("dummyCardDrop")
                    }
                    data-id="-1"
                />
                {this.props.data.tasks.map((task, key) => (
                    <TaskCard
                        key={key}
                        taskIndex={key}
                        columnIndex={this.props.index}
                        data={task}
                        updateDropTarget={this.props.updateDropTarget}
                    />
                ))}
            </div>
        );
    }
}
export default Column;
