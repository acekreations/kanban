import React, { PureComponent } from "react";

class TaskDropZone extends PureComponent {
    handleDragEnter(e) {
        e.stopPropagation();
        if (this.props.dragType === "task") {
            e.currentTarget.classList.add("taskDropZoneDrop");
            const dataID = parseInt(e.target.getAttribute("data-id"));
            this.props.updateDropTarget(dataID);
        }
    }

    handleDragLeave(e) {
        e.stopPropagation();
        e.currentTarget.classList.remove("taskDropZoneDrop");
    }

    handleDrop(e) {
        e.stopPropagation();
        e.currentTarget.classList.remove("taskDropZoneDrop");
        e.preventDefault();
        if (this.props.dragType === "task") {
            this.props.updateDragDrop(
                e.dataTransfer.getData("text"),
                this.props.columnIndex
            );
            e.dataTransfer.clearData();
            this.props.updateDragType(null);
        }
    }
    render() {
        return (
            <div
                className="taskDropZone"
                data-id={this.props.taskIndex}
                onDragEnter={e => this.handleDragEnter(e)}
                onDragLeave={e => this.handleDragLeave(e)}
                onDrop={e => this.handleDrop(e)}
            />
        );
    }
}
export default TaskDropZone;
