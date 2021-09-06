import React, { useState } from "react";
import { Relational, Expression } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";

interface RelationalProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function RelationalC(props: RelationalProps) {
    let expCount = 0;
    const {model, callBack} = props;
    let lhs: any;
    let rhs: any;
    let operator: string;
    
    
    if (model.kind === "RelationalC" ) {
        const relationalModel: Relational = model.expressionType as Relational;
        lhs = <ExpressionComponent model={relationalModel.lhsExp} callBack={callBack} isRoot={false} />;
        rhs = <ExpressionComponent model={relationalModel.rhsExp} callBack={callBack} isRoot={false} />;
        operator = relationalModel.operator;
        // suggestion = <Suggestions model={model} kind={"comparison"} operator={false} />;
    }

    // const onClickOnExpression = (suggestions:string[]) => {
    //     // callback(model);
    //     callBack(suggestions)
    // };

    const onClickOnExpression = () => {
        // callback(model);
        console.log(`RelationalC kind: ${model.kind}`);
        console.log(model);
        callBack(getSuggestionsBasedOnExpressionKind("RelationalC"), model)
    };

    return (
        <span>
            <button className="template-button" onClick={onClickOnExpression}>{lhs}</button>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operator</button>
            </span>
            <button className="template-button">{rhs}</button>
        </span>
    );
}
