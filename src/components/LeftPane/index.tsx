import React from "react";

import '../MainContainer/styles.css';

export function LeftPane() {
    return (
        <div className="App-leftPane">
            <h2 className="App-leftPane-heading">Conditional Statement</h2>
            <div className="App-statement-template-editor"></div>
            <div className="App-context-sensitivePane"></div>
        </div>
    );
}
