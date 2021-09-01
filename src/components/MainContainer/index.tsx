import React from 'react';
import { RightPane } from '../RightPane';
import { LeftPane } from '../LeftPane';

import './styles.css';

export function MainContainer() {

    return (
        <div className="App">
            <div className="App-tree-editor"></div>
            <div className="App-tree-editor">
                <LeftPane />
                <RightPane />
            </div>
        </div>
    )

}
