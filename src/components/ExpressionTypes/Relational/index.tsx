import React from "react";
import { Relational, Expression } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";

interface RelationalProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function RelationalC(props: RelationalProps) {
    const {model, callBack} = props;
    let lhsExpression: any;
    let rhsExpression: any;
    let lhs: any;
    let rhs: any;    
    
    if (model.kind === "RelationalC" ) {
        const relationalModel: Relational = model.expressionType as Relational;
        lhsExpression = relationalModel.lhsExp
        rhsExpression = relationalModel.rhsExp
        lhs = <ExpressionComponent model={lhsExpression} callBack={callBack} isRoot={false} />;
        rhs = <ExpressionComponent model={rhsExpression} callBack={callBack} isRoot={false} />;
    }

    const onClickOnExpression = (model: Expression, e:any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind("RelationalC"), model)
    };

    return (
        <span>
            {/* <button className="template-button" onClick={()=>onClickOnExpression(lhsExpression)}>{lhs}</button> */}
            <span className="template-button" onClick={(e)=>onClickOnExpression(lhsExpression, e)}>{lhs}</span>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operator</button>
            </span>
            {/* <button className="template-button" onClick={()=>onClickOnExpression(rhsExpression)}>{rhs}</button> */}
            <span className="template-button" onClick={(e)=>onClickOnExpression(rhsExpression, e)}>{rhs}</span>
        </span>
    );
}
