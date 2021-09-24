import React from "react";
import { STNode } from "../../models/syntax-tree-interfaces";
import { getExpressionTypeComponent } from "../../utils";
import { VariableStatement } from "../Statements/VariableStatement";

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
        // <IfStatement model={model} callBack={callBack} isRoot={isRoot} component={component} />
        <VariableStatement model={model} callBack={callBack} isRoot={isRoot} component={component} />
    );
}
