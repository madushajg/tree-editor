import React, { ReactNode } from "react";
import { STNode } from "../../models/syntax-tree-interfaces";
import { addExpression, addOperator, Operator } from "../../utils/utils";

import '../MainContainer/styles.css';

interface SuggestionsProps {
    model: STNode
    suggestions: string[] | Operator[],
    operator: boolean,
    callBack: (model: STNode) => void
}

export function Suggestions(props: SuggestionsProps) {
    const { model, suggestions, callBack } = props;

    const onClickExpressionSuggestion = (model: STNode, kind: string) => {
        addExpression(model, kind);
        callBack(model);
    }

    const onClickOperatorSuggestion = (model: STNode, operator: Operator) => {
        addOperator(model, operator);
        callBack(model);
    }

    let suggestionsContent:ReactNode[] = suggestions.map((suggestion, index) => {
        if (suggestion.constructor === String) {
            return <button className="suggestion-buttons" key={index} onClick={(e) => onClickExpressionSuggestion(model, suggestion)}>
                        {suggestion}
                    </button>;
        } else {
            const operatorItem:Operator = suggestion as Operator;
            return <button className="suggestion-buttons" key={index} onClick={(e) => onClickOperatorSuggestion(model, operatorItem)}>
                        {operatorItem.value}
                    </button>;
        }
    });

    return (
        <div className="App-suggestion-block">
            {suggestionsContent}
        </div>
    );
}
