import React from "react";
import { Expression, Logical } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";
import * as c from "../../../constants";

interface logicalProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function LogicalC(props: logicalProps) {
    const {model, callBack} = props;
    let lhsExpression: any;
    let rhsExpression: any;
    let lhs: any;
    let rhs: any;    
    
    if (model.kind === c.LOGICAL ) {
        const logicalModel: Logical = model.expressionType as Logical;
        lhsExpression = logicalModel.lhsComponent
        rhsExpression = logicalModel.rhsComponent
        lhs = <ExpressionComponent model={lhsExpression} callBack={callBack} isRoot={false} />;
        rhs = <ExpressionComponent model={rhsExpression} callBack={callBack} isRoot={false} />;
    }

    const onClickOnExpression = (model: Expression, e:any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.LOGICAL), model)
    };

    return (
        <span>
            <button className="template-button" onClick={(e)=>onClickOnExpression(lhsExpression, e)}>{lhs}</button>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operator</button>
            </span>
            <button className="template-button" onClick={(e)=>onClickOnExpression(rhsExpression, e)}>{rhs}</button>
        </span>
    );
}
