import React from "react";
import { STNode } from "../../models/syntax-tree-interfaces";
import { getExpressionTypeComponent } from "../../utils";
import { IfStatement } from "../Statements/IfStatement";

interface ExpressionComponentProps {
    model: STNode
    callBack: (suggestions: string[], model: STNode, operator: boolean) => void
    isRoot: boolean
}

export function ExpressionComponent(props: ExpressionComponentProps) {
    const { model, callBack, isRoot } = props;

    const component = getExpressionTypeComponent(model, callBack);

    return (
        // <span>{component}</span>
        <IfStatement model={model} callBack={callBack} isRoot={isRoot} component={component} />
        // <VariableStatement model={model} callBack={callBack} isRoot={isRoot} component={component} />
    );
}

// <BinaryExpression />

/* <span>
    <button className="template-button" onClick={(e) => onClickOnExpression(lhsExpression, e)}><ExpressionComponent/></button>
    <button className="template-button" onClick={(e) => onClickOperator(e)}>{operator ? operator : "operator"}</button>
    <button className="template-button" onClick={(e) => onClickOnExpression(rhsExpression, e)}><ExpressionComponent /></button>
</span> */


/* <span>
    <button className="template-button" onClick={(e) => onClickOnExpression(lhsExpression, e)}><NumericLiteral/></button>
    <button className="template-button" onClick={(e) => onClickOperator(e)}>{operator ? operator : "operator"}</button>
    <button className="template-button" onClick={(e) => onClickOnExpression(rhsExpression, e)}><NumericLiteral /></button>
</span> */

/* <span>
    <button className="template-button" onClick={(e) => onClickOnExpression(lhsExpression, e)}>
        <span className="App-expression-block App-expression-block-element">
            <button className="template-button" onClick={(e) => onClickOnExpression(e)}>
                {value}
            </button>
        </span>
    </button>
    <button className="template-button" onClick={(e) => onClickOperator(e)}>{operator ? operator : "operator"}</button>
    <button className="template-button" onClick={(e) => onClickOnExpression(rhsExpression, e)}>
        <span className="App-expression-block App-expression-block-element">
            <button className="template-button" onClick={(e) => onClickOnExpression(e)}>
                {value}
            </button>
        </span>
    </button>
</span> */
