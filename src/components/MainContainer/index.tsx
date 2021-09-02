import React from 'react';
import { RightPane } from '../RightPane';
import { LeftPane } from '../LeftPane';
import image2 from './base.png';

import './styles.css';

export function MainContainer() {

    return (
        <div className="App">
            <img src={image2} alt="Flowers in Chania" width='100%'/>
            <div className="App-tree-editor">
                <LeftPane />
                <div className="vl"></div>
                <RightPane />
            </div>
        </div>
    )

}
