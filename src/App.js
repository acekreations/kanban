import React, { Component } from "react";
import "./App.css";
import data from "./seeds";

//Components
import Menu from "./components/Menu";
import Column from "./components/Column";

class App extends Component {
    state = {
        data: data,
        dropTarget: 0
    };

    updateDragDrop(data, dropCol) {
        let stateData = this.state.data;
        data = data.split(",");
        const colIndex = parseInt(data[0]);
        const taskIndex = parseInt(data[1]);
        const draggedTask = stateData[colIndex].tasks[taskIndex];

        stateData[colIndex].tasks.splice(taskIndex, 1);

        if (this.state.dropTarget === null || this.state.dropTarget === -1) {
            stateData[dropCol].tasks.unshift(draggedTask);
        } else {
            stateData[dropCol].tasks.splice(
                this.state.dropTarget + 1,
                0,
                draggedTask
            );
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

    render() {
        return (
            <div className="App">
                <div id="logoBar" className="w-100 h-60px" />

                <Menu />

                <div
                    id="contentContainer"
                    className="ml-100px mt-100px pl-20px pt-20px flex"
                >
                    {this.state.data.map((column, key) => (
                        <Column
                            key={key}
                            index={key}
                            data={column}
                            updateDragDrop={this.updateDragDrop.bind(this)}
                            updateDropTarget={this.updateDropTarget.bind(this)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default App;
