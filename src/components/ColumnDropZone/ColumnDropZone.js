import React, { PureComponent } from "react";

class ColumnDropZone extends PureComponent {
    handleDragEnter(e) {
        e.stopPropagation();
        if (this.props.dragType === "column") {
            e.currentTarget.classList.add("columnDropZoneDrop");
            const dataID = parseInt(e.target.getAttribute("data-id"));
            this.props.updateDropTarget(dataID);
        }
    }

    handleDragLeave(e) {
        e.stopPropagation();
        e.currentTarget.classList.remove("columnDropZoneDrop");
    }

    handleDrop(e) {
        e.stopPropagation();
        e.currentTarget.classList.remove("columnDropZoneDrop");
        e.preventDefault();
        if (this.props.dragType === "column") {
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
                className="columnDropZone"
                data-id={this.props.columnIndex}
                onDragEnter={e => this.handleDragEnter(e)}
                onDragLeave={e => this.handleDragLeave(e)}
                onDrop={e => this.handleDrop(e)}
            />
        );
    }
}
export default ColumnDropZone;
