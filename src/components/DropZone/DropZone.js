import React, { Component } from "react";

class DropZone extends Component {
    handleDragEnter(e) {
        e.currentTarget.classList.add("dropZoneDrop");
        const dataID = parseInt(e.target.getAttribute("data-id"));
        this.props.updateDropTarget(dataID);
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove("dropZoneDrop");
    }

    handleDrop(e) {
        e.currentTarget.classList.remove("dropZoneDrop");
    }
    render() {
        return (
            <div
                className="dropZone"
                data-id={this.props.taskIndex}
                onDragEnter={e => this.handleDragEnter(e)}
                onDragLeave={e => this.handleDragLeave(e)}
                onDrop={e => this.handleDrop(e)}
            />
        );
    }
}
export default DropZone;
