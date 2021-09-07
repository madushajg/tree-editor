import React, { useState } from "react";
import {Expression} from '../../models/definitions'
import { getSuggestionsBasedOnExpressionKind } from "../../utils";
import { ExpressionComponent } from "../Expression";
import { sampleModel } from "../MainContainer";

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
    const [isOperator, SetIsOperator] = useState(false);

    const onClickExpressionButton = (suggestions:string[], model: Expression, operator:boolean) => {
        currentModel.model = model
        SetSuggestionsList(suggestions)
        SetIsSuggestionClicked(false)
        SetIsOperator(operator)
    }

    const onClickSuggestionButton = (cmodel: Expression) => {
        currentModel.model = cmodel
        console.log("==========onClickSuggestionButton===========")
        console.log("===currentModel===")
        console.log(currentModel.model)
        console.log("===model===")
        console.log(model)
        console.log("==========onClickSuggestionButton===========")
        SetIsSuggestionClicked(!isSuggestionClicked)
        //SetIsOperator(false)
    }

    return (
        <div className="App-leftPane">
            <h3 className="App-leftPane-heading">Conditional Statement</h3>
            <div className="App-statement-template-editor">
                <div className="App-statement-template-editor-inner">
                    <ExpressionComponent model={model} callBack={onClickExpressionButton} isRoot={true}/>
                </div>
            </div>
            <div className="App-context-sensitivePane">
                <Suggestions model={currentModel.model} suggestions={suggestionList} operator={isOperator} callBack={onClickSuggestionButton}/>
            </div>

        </div>
    );
}
