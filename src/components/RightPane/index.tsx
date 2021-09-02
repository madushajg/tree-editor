import React from "react";

import '../MainContainer/styles.css';

export function RightPane() {
    return (
        <div className="App-rightPane">
            <div className="App-rightPane-block">
                <h2 className="App-rightPane-heading">Variables</h2>
            </div>
            <div className="App-rightPane-block">
                <h2 className="App-rightPane-heading">Constants</h2>
            </div>
            <div className="App-rightPane-block">
                <h2 className="App-rightPane-heading">Functions</h2>
            </div>
            <button className="closure-button-cancel closure-button">Cancel</button>
            <button className="closure-button-save closure-button">Save</button>

        </div>
    );
}
