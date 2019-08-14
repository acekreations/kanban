import React, { Component } from "react";
import "./App.css";
import data from "./seeds";

//Components
import Menu from "./components/Menu";
import Column from "./components/Column";
import ColumnDropZone from "./components/ColumnDropZone";

class App extends Component {
    state = {
        data: data,
        dropTarget: 0,
        dragType: null
    };

    updateDragDrop(data, dropCol) {
        let stateData = this.state.data;
        data = data.split(",");
        if (data[0] === "task") {
            const colIndex = parseInt(data[1]);
            const taskIndex = parseInt(data[2]);
            const dropTarget = this.state.dropTarget;
            const draggedTask = stateData[colIndex].tasks[taskIndex];

            //remove task from stateData
            stateData[colIndex].tasks.splice(taskIndex, 1);

            if (dropTarget === null || dropTarget === 0) {
                //drop at start of list
                stateData[dropCol].tasks.unshift(draggedTask);
            } else if (
                colIndex !== dropCol ||
                (colIndex === dropCol &&
                    dropTarget !== taskIndex &&
                    dropTarget !== taskIndex + 1)
            ) {
                //drop in dropTarget location
                stateData[dropCol].tasks.splice(
                    this.state.dropTarget,
                    0,
                    draggedTask
                );
            } else if (dropTarget === 10000) {
                //drop at end of list
                stateData[dropCol].tasks.push(draggedTask);
            } else {
                //drop in same spot
                stateData[dropCol].tasks.splice(taskIndex, 0, draggedTask);
            }

            this.setState({
                data: stateData
            });
        } else if (data[0] === "column") {
            const colIndex = parseInt(data[1]);
            const dropTarget = this.state.dropTarget;
            const draggedCol = stateData[colIndex];

            //remove column from stateData
            stateData.splice(colIndex, 1);

            if (dropTarget === null || dropTarget === 0) {
                //drop at start of list
                stateData.unshift(draggedCol);
            } else if (dropTarget !== colIndex && dropTarget !== colIndex + 1) {
                stateData.splice(this.state.dropTarget, 0, draggedCol);
            } else if (dropTarget === 10000) {
                //drop at end of list
                stateData.push(draggedCol);
            } else {
                //drop in same spot
                stateData.splice(colIndex, 0, draggedCol);
            }
        }

        this.setState({
            data: stateData
        });
    }

    updateDropTarget(target) {
        this.setState({
            dropTarget: target
        });
    }

    updateDragType(dragType) {
        this.setState({
            dragType: dragType
        });
    }

    updateTask(colID, taskID, body, color) {
        let stateData = this.state.data;
        stateData[colID].tasks[taskID].body = body;
        stateData[colID].tasks[taskID].color = color;
        this.setState({
            data: stateData
        });
    }

    render() {
        return (
            <div className="App">
                <div id="logoBar" className="w-100 h-60px" />

                <Menu />

                <div
                    id="contentContainer"
                    className="ml-100px mt-100px pl-20px pt-20px flex"
                    onDragOver={e => e.preventDefault()}
                >
                    {this.state.data.map((column, index) => (
                        <div key={index} className="flex">
                            <ColumnDropZone
                                dragType={this.state.dragType}
                                columnIndex={index}
                                updateDragDrop={this.updateDragDrop.bind(this)}
                                updateDragType={this.updateDragType.bind(this)}
                                updateDropTarget={this.updateDropTarget.bind(
                                    this
                                )}
                            />
                            <Column
                                columnIndex={index}
                                data={column}
                                dragType={this.state.dragType}
                                updateDragDrop={this.updateDragDrop.bind(this)}
                                updateDropTarget={this.updateDropTarget.bind(
                                    this
                                )}
                                updateDragType={this.updateDragType.bind(this)}
                                updateTask={this.updateTask.bind(this)}
                            />
                            {index === this.state.data.length - 1 && (
                                <ColumnDropZone
                                    dragType={this.state.dragType}
                                    columnIndex={10000}
                                    updateDragDrop={this.updateDragDrop.bind(
                                        this
                                    )}
                                    updateDragType={this.updateDragType.bind(
                                        this
                                    )}
                                    updateDropTarget={this.updateDropTarget.bind(
                                        this
                                    )}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default App;
