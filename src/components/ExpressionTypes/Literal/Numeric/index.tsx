import React from "react";
import { getSuggestionsBasedOnExpressionKind } from "../../../../utils";
import * as c from "../../../../constants";
import { NumericLiteral, STNode } from "../../../../models/syntax-tree-interfaces";

interface LiteralProps {
    model: STNode
    callBack: (suggestions: string[], model: STNode) => void
}

export function NumericLiteralC(props: LiteralProps) {
    const { model, callBack } = props;
    let literalModel: NumericLiteral;
    let value: any;

    if (model.kind === "NumericLiteral") {
        literalModel = model as NumericLiteral;
        value = literalModel.literalToken.value;
    }

    const onClickOnExpression = (e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.LITERAL), literalModel.literalToken)
    };

    return (
        <span className="App-expression-block App-expression-block-element">
            {/* <input type="text" id="literal" name="literal" onClick={(e) => onClickOnExpression(e)} className="literal-input"></input> */}
            <button className="template-button" onClick={(e) => onClickOnExpression(e)}>
                {value}
            </button>
        </span>
    );
}
