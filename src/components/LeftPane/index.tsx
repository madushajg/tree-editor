import React, { useState } from "react";
import {Expression, Comparison} from '../../models/definitions'
import { getExpressionTypeComponent, getSuggestionsBasedOnExpressionKind } from "../../utils";
import { addExpression } from "../../utils/utils";
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

    const onClickButton = (suggestions:string[], model: Expression, operator:boolean) => {
        currentModel.model = model
        SetSuggestionsList(suggestions)
        SetIsSuggestionClicked(false)
        SetIsOperator(operator)
    }

    const onClickSuggestionButton = (model: Expression) => {
        currentModel.model = model
        SetIsSuggestionClicked(!isSuggestionClicked)
        SetIsOperator(!isOperator)
    }

    // console.log(x);
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
                <Suggestions model={currentModel.model} suggestions={suggestionList} operator={isOperator} callBack={onClickSuggestionButton}/>
            </div>

        </div>
    );
}
