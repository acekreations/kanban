import React, { PureComponent } from "react";
import TaskCard from "../TaskCard/TaskCard";
import TaskDropZone from "../TaskDropZone/TaskDropZone";
import { labeledStatement } from "@babel/types";

class Column extends PureComponent {
    handleDragStart(e) {
        e.stopPropagation();
        e.dataTransfer.setData("text", `column,${this.props.columnIndex}}`);
        this.props.updateDragType("column");
        e.target.classList.add("colDrag");
    }

    handleDragEnd(e) {
        e.target.classList.remove("colDrag");
    }

    render() {
        return (
            <div
                className="column"
                onDragOver={e => e.preventDefault()}
                draggable="true"
                onDragStart={e => this.handleDragStart(e)}
                onDragEnd={e => this.handleDragEnd(e)}
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
                        <TaskDropZone
                            taskIndex={index}
                            columnIndex={this.props.columnIndex}
                            updateDropTarget={this.props.updateDropTarget}
                            updateDragDrop={this.props.updateDragDrop}
                            updateDragType={this.props.updateDragType}
                            dragType={this.props.dragType}
                        />
                        <TaskCard
                            taskIndex={index}
                            columnIndex={this.props.columnIndex}
                            data={task}
                            updateDragType={this.props.updateDragType}
                        />
                    </div>
                ))}
                {/* drop zone for moving to last position or for empty task lists */}
                <TaskDropZone
                    taskIndex={10000}
                    columnIndex={this.props.columnIndex}
                    updateDropTarget={this.props.updateDropTarget}
                    updateDragDrop={this.props.updateDragDrop}
                    updateDragType={this.props.updateDragType}
                    dragType={this.props.dragType}
                />
            </div>
        );
    }
}
export default Column;
