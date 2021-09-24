import React, { useState } from "react";
import { getSuggestionsBasedOnExpressionKind } from "../../utils";
import { ExpressionComponent } from "../Expression";
import * as c from "../../constants";

import '../MainContainer/styles.css';
import { Suggestions } from "../Suggestions";
import { STNode } from "../../models/syntax-tree-interfaces";
import { traversNode } from '../../utils/ast-utils';
import {visitor as CodeGenVisitor} from "../Visitors/codeGenVisitor";
import { Operator } from "../../utils/utils";


interface ModelProps {
    model: STNode
    currentModel: { model: STNode }
}

export function LeftPane(props: ModelProps) {
    const { model, currentModel } = props;

    const [suggestionList, SetSuggestionsList] = useState<string[]|Operator[]>(getSuggestionsBasedOnExpressionKind(c.DEFAULT_BOOL));
    const [, SetIsSuggestionClicked] = useState(false);
    const [isOperator, SetIsOperator] = useState(false);


    const onClickExpressionButton = (suggestions: string[]|Operator[], cModel: STNode, operator: boolean) => {
        currentModel.model = cModel;
        SetSuggestionsList(suggestions)
        SetIsSuggestionClicked(false)
        SetIsOperator(operator)
    }

    const onClickSuggestionButton = (model: STNode) => {
        SetIsSuggestionClicked(prevState => {
            return !prevState;
        });
    }

    CodeGenVisitor.clearShapeList();
    traversNode(model, CodeGenVisitor);

    console.log(CodeGenVisitor.getCodeSnippet());


    return (
        <div className="App-leftPane">
            <h3 className="App-leftPane-heading">Conditional Statement</h3>
            <div className="App-statement-template-editor">
                <div className="App-statement-template-editor-inner">
                    <ExpressionComponent model={model} callBack={onClickExpressionButton} isRoot={true} />
                </div>
            </div>
            <div className="App-context-sensitivePane">
                <Suggestions model={currentModel.model} suggestions={suggestionList} operator={isOperator} callBack={onClickSuggestionButton} />
            </div>

        </div>
    );
}
