import React from "react";
import { Expression } from "../../models/definitions";
import {getExpressionTypeComponent} from "../../utils";

interface ExpressionComponentProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression, operator: boolean) => void
    isRoot: boolean
}


export function ExpressionComponent(props: ExpressionComponentProps) {
    const { model, callBack, isRoot } = props;

    const component = getExpressionTypeComponent(model, callBack);

    return (
        <span>
            {
                isRoot ?
                <span className="App-expression-block App-expression-block-disabled">
                    {"if"}
                </span> : null
            }
            {/* <span> */}
                {component}
            {/* </span> */}
            {
                isRoot ?
                <span className="App-expression-block App-expression-block-disabled">
                    &nbsp;{"{"}
                    <br/>
                    &nbsp;&nbsp;&nbsp;{"..."}
                    <br/>
                    {"} "}
                    <button className="add-new-expression"> + </button>
                    {" else {"}
                    <br/>
                    &nbsp;&nbsp;&nbsp;{"..."}
                    <br/>
                    {"}"}
                    {/* {"}"} */}
                </span> : null
            }              
        </span>
    );
}
