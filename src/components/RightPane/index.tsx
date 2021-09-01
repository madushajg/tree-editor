import React from "react";

import '../MainContainer/styles.css';

export function RightPane() {
    return (
        <div className="App-rightPane">
            <h3>Suggestions</h3>
            <button className="closure-button-cancel closure-button">Cancel</button>
            <button className="closure-button-save closure-button">Save</button>
        </div>
    );
}
