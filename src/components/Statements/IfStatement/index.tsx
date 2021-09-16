import React, { ReactNode } from "react";

import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import * as c from "../../../constants";
import { Expression } from "../../../models/definitions";

interface IfStatementProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression, operator: boolean) => void
    isRoot: boolean
    component: ReactNode
}

export function IfStatement(props: IfStatementProps) {
    const { model, callBack, isRoot, component } = props;

    const onClickOnRootExpression = (model: Expression, e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.DEFAULT_BOOL), model, false)
    };

    return (
        isRoot ? (
            <span>
                <span className="App-expression-block App-expression-block-disabled">
                    {"if"}
                </span>
                <button className="template-button" onClick={(e) => onClickOnRootExpression(model, e)}>
                    {component}
                </button>
                <span className="App-expression-block App-expression-block-disabled">
                    &nbsp;{"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;{"..."}
                    <br />
                    {"} "}
                    <button className="add-new-expression"> + </button>
                    {" else {"}
                    <br />
                    &nbsp;&nbsp;&nbsp;{"..."}
                    <br />
                    {"}"}
                </span> 
            </span>
        ) : <span>{component}</span>
    );
}
