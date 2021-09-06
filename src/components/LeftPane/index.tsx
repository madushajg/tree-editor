import React, { useState } from "react";
import {Expression} from '../../models/definitions'
import { getSuggestionsBasedOnExpressionKind } from "../../utils";
import { ExpressionComponent } from "../Expression";

import '../MainContainer/styles.css';
import { Suggestions } from "../Suggestions";


interface ModelProps {
    model: Expression
    currentModel: {model: Expression}
}

export function LeftPane(props: ModelProps) {
    const {model, currentModel} = props;

    const [suggestionList, SetSuggestionsList] = useState(getSuggestionsBasedOnExpressionKind("LiteralC"));
    const [isSuggestionClicked, SetIsSuggestionClicked] = useState(false);

    const onClickButton = (suggestions:string[], model: Expression) => {
        currentModel.model = model
        SetSuggestionsList(suggestions)
        SetIsSuggestionClicked(false)
    }

    const onClickSuggestionButton = (model: Expression) => {
        currentModel.model = model
        SetIsSuggestionClicked(!isSuggestionClicked)
    }

    console.log(model);
    return (
        <div className="App-leftPane">
            <h3 className="App-leftPane-heading">Conditional Statement</h3>
            <div className="App-statement-template-editor">
                <div className="App-statement-template-editor-inner">
                    <ExpressionComponent model={model} callBack={onClickButton} isRoot={true}/>
                </div>
            </div>
            <div className="App-context-sensitivePane">
                <Suggestions model={currentModel.model} suggestions={suggestionList} operator={false} callBack={onClickSuggestionButton}/>
            </div>

        </div>
    );
}
