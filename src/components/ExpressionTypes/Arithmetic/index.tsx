import React from "react";
import { Arithmatic, Expression } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";

interface ArithmeticProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function ArithmeticC(props: ArithmeticProps) {
    const {model, callBack} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmeticC" ) {
        const arithmaticModel: Arithmatic = model.expressionType as Arithmatic;
        lhs = <ExpressionComponent model={arithmaticModel.lhsOperand} callBack={callBack} isRoot={false}/>;
        rhs = <ExpressionComponent model={arithmaticModel.rhsOperand} callBack={callBack} isRoot={false}/>;
    }

    const onClickOnExpression = () => {
        callBack(getSuggestionsBasedOnExpressionKind("RelationalC"), model)
    };

    return (
        <span>
            {/* {"("} */}
            <button className="template-button">{lhs}</button>
            {/* <button className="template-button" onClick={onClickOnExpression}>{lhs}</button> */}
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operators</button>    
            </span>
            <button className="template-button">{rhs}</button>
            {/* <button className="template-button" onClick={onClickOnExpression}>{rhs}</button> */}
            {/* {")"} */}
        </span>
    );
}
