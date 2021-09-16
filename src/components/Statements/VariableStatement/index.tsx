import React, { ReactNode } from "react";

import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import * as c from "../../../constants";
import { Expression } from "../../../models/definitions";

interface VariableStatementProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression, operator: boolean) => void
    isRoot: boolean
    component: ReactNode
}

export function VariableStatement(props: VariableStatementProps) {
    const { model, callBack, isRoot, component } = props;

    const onClickOnRootExpression = (model: Expression, e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.DEFAULT_BOOL), model, false) // Need to change this to get suggestions for variable
    };

    return (
        isRoot ? (
            <span>
                <span className="App-expression-block App-expression-block-disabled">
                    {"var x = "}
                </span>
                <button className="template-button" onClick={(e) => onClickOnRootExpression(model, e)}>
                    {component}
                </button>
                <span className="App-expression-block App-expression-block-disabled">
                    {" ;"}
                </span>
            </span>
        ) : <span>{component}</span>
    );
}
