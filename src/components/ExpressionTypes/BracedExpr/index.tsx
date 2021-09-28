import React from "react";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";
import { BracedExpression, STNode } from "../../../models/syntax-tree-interfaces";
import { Operator } from "../../../utils/utils";

interface BracedExprProps {
    model: STNode
    callBack: (suggestions: string[]|Operator[], model: STNode, operator: boolean) => void
}
export function BracedExpressionC(props: BracedExprProps) {
    const { model, callBack } = props;
    let expression: any;
    let expressionComponent: any;

    if (model.kind === 'BracedExpression') {
        let bracedExpModel = model as BracedExpression;
        expression = bracedExpModel.expression;
        expressionComponent = <ExpressionComponent model={expression} callBack={callBack} isRoot={false} />;
    }

    const onClickOnExpression = (model: STNode, e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind("Arithmetic"), model, false)
    };

    return (
        <span>
            <button className="template-button" onClick={(e) => onClickOnExpression(expression, e)}>{expressionComponent}</button>
        </span>
    );
}
