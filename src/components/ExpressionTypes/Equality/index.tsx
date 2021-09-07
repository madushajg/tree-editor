import React from "react";
import { Expression, Equality } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";
import * as c from "../../../constants";

interface EqualityProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function EqualityC(props: EqualityProps) {
    const {model, callBack} = props;
    let lhsExpression: any;
    let rhsExpression: any;
    let lhs: any;
    let rhs: any;    
    
    if (model.kind === c.EQUALITY ) {
        const equalityModel: Equality = model.expressionType as Equality;
        lhsExpression = equalityModel.lhsExp
        rhsExpression = equalityModel.rhsExp
        lhs = <ExpressionComponent model={lhsExpression} callBack={callBack} isRoot={false} />;
        rhs = <ExpressionComponent model={rhsExpression} callBack={callBack} isRoot={false} />;
    }

    const onClickOnExpression = (model: Expression, e:any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.EQUALITY), model)
    };

    return (
        <span>
            <button className="template-button" onClick={(e)=>onClickOnExpression(lhsExpression, e)}>{lhs}</button>
            {/* <span className="template-button" onClick={(e)=>onClickOnExpression(lhsExpression, e)}>{lhs}</span> */}
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operator</button>
            </span>
            <button className="template-button" onClick={(e)=>onClickOnExpression(rhsExpression, e)}>{rhs}</button>
            {/* <span className="template-button" onClick={(e)=>onClickOnExpression(rhsExpression, e)}>{rhs}</span> */}
        </span>
    );
}
