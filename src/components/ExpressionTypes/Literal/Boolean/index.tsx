import React from "react";
import { getSuggestionsBasedOnExpressionKind } from "../../../../utils";
import * as c from "../../../../constants";
import { BooleanLiteral, STNode } from "../../../../models/syntax-tree-interfaces";

interface LiteralProps {
    model: STNode
    callBack: (suggestions: string[], model: STNode) => void
}

export function BooleanLiteralC(props: LiteralProps) {
    const { model, callBack } = props;
    let value: any;

    const onClickOnExpression = (e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.LITERAL), model)
    };

    if (model.kind === "BooleanLiteral") {
        const literalModel: BooleanLiteral = model as BooleanLiteral;
        value = literalModel.literalToken.value;
    }

    return (
        <span className="App-expression-block App-expression-block-element">
            {/* <input type="text" id="literal" name="literal" onClick={(e) => onClickOnExpression(e)} className="literal-input"></input> */}
            <button className="template-button" onClick={(e) => onClickOnExpression(e)}>
                {value}
            </button>
        </span>
    );
}
