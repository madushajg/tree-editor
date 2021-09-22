import React, { ReactNode } from "react";

import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import * as c from "../../../constants";
import { STNode } from "../../../models/syntax-tree-interfaces";

interface IfStatementProps {
    model: STNode
    callBack: (suggestions: string[], model: STNode, operator: boolean) => void
    isRoot: boolean
    component: ReactNode
}

export function IfStatement(props: IfStatementProps) {
    const { model, callBack, isRoot, component } = props;

    const onClickOnRootExpression = (model: STNode, e: any) => {
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
