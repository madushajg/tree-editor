import { stringify } from "querystring";
import React from "react";
import { Expression, Literal } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";

interface LiteralProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function LiteralC(props: LiteralProps) {
    const {model, callBack} = props;
    let value: any;

    const onClickOnExpression = () => {
        // callback(model);
        console.log(`LiteralC kind: ${model.kind}`);
        console.log(model);
        callBack(getSuggestionsBasedOnExpressionKind("LiteralC"), model)
    };

    
    if (model.kind === "LiteralC" ) {
        const literalModel: Literal = model.expressionType as Literal;
        value = literalModel?.value ? literalModel.value : "expression";
    }

    return (
        <span className="App-expression-block App-expression-block-element">
            <button className="template-button" onClick={onClickOnExpression}>
                {value}
            </button>
        </span>
    );
}
