import React, { Component } from "react";
import TaskCard from "../TaskCard/TaskCard";
import DropZone from "../DropZone/DropZone";

class Column extends Component {
    handleDrop(e) {
        e.preventDefault();
        this.props.updateDragDrop(
            e.dataTransfer.getData("text"),
            this.props.index
        );
        e.dataTransfer.clearData();
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

                {this.props.data.tasks.map((task, index) => (
                    <div key={index}>
                        <DropZone
                            taskIndex={index}
                            columnIndex={this.props.index}
                            updateDropTarget={this.props.updateDropTarget}
                        />
                        <TaskCard
                            taskIndex={index}
                            columnIndex={this.props.index}
                            data={task}
                            updateDropTarget={this.props.updateDropTarget}
                        />
                        {/* make dropzone after last task */}
                        {index === this.props.data.tasks.length - 1 && (
                            <DropZone
                                taskIndex={10000}
                                columnIndex={this.props.index}
                                updateDropTarget={this.props.updateDropTarget}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
export default Column;
