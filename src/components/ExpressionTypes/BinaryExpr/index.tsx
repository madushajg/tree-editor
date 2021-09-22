import React from "react";
import { getKindBasedOnOperator, getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { getOperatorSuggestions } from "../../../utils";
import { ExpressionComponent } from "../../Expression";
import { BinaryExpression, STNode } from "../../../models/syntax-tree-interfaces";

interface BinaryProps {
    model: STNode
    callBack: (suggestions: string[], model: STNode, operator: boolean) => void
}
export function BinaryExpressionCC(props: BinaryProps) {
    const { model, callBack } = props;
    let lhsExpression: any;
    let rhsExpression: any;
    let lhs: any;
    let rhs: any;
    let operatorKind: string = "";
    let operator: any;

    if (model.kind === 'BinaryExpression') {
        let binaryExpModel = model as BinaryExpression;
        operatorKind = binaryExpModel.operator.kind;
        lhsExpression = binaryExpModel.lhsExpr;
        rhsExpression = binaryExpModel.rhsExpr;
        operator = binaryExpModel.operator.value;
        lhs = <ExpressionComponent model={lhsExpression} callBack={callBack} isRoot={false} />;
        rhs = <ExpressionComponent model={rhsExpression} callBack={callBack} isRoot={false} />;
    }

    const kind = getKindBasedOnOperator(operatorKind);

    const onClickOperator = (e: any) => {
        e.stopPropagation()
        callBack(getOperatorSuggestions(kind), model, true)
    }

    const onClickOnExpression = (model: STNode, e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(kind), model, false)
    };

    return (
        <span>
            <button className="template-button" onClick={(e) => onClickOnExpression(lhsExpression, e)}>{lhs}</button>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button" onClick={(e) => onClickOperator(e)}>{operator ? operator : "operator"}</button>
            </span>
            <button className="template-button" onClick={(e) => onClickOnExpression(rhsExpression, e)}>{rhs}</button>
        </span>
    );
}
