import React from "react";
import { Arithmetic, Expression } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { getOperatorSuggestions } from "../../../utils";
import { ExpressionComponent } from "../../Expression";

interface ArithmeticProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression, operator:boolean) => void
}

export function ArithmeticC(props: ArithmeticProps) {
    const {model, callBack} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmeticC" ) {
        const arithmeticModel: Arithmetic = model.expressionType as Arithmetic;
        lhs = <ExpressionComponent model={arithmeticModel.lhsOperand} callBack={callBack} isRoot={false}/>;
        rhs = <ExpressionComponent model={arithmeticModel.rhsOperand} callBack={callBack} isRoot={false}/>;
    }


    const onClickOperator = () => {
        callBack(getOperatorSuggestions("ArithmeticC"), model, true)
        console.log("operator model")
        console.log(model)
    }

    const onClickOnExpression = () => {
        callBack(getSuggestionsBasedOnExpressionKind("ArithmeticC"), model, false)
    };

    return (
        <span>
            {/* {"("} */}
            {/* <button className="template-button">{lhs}</button> */}
            <button className="template-button" onClick={onClickOnExpression}>{lhs}</button>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button" onClick={()=> onClickOperator()}>operators</button>
            </span>
            {/* <button className="template-button">{rhs}</button> */}
            <button className="template-button" onClick={onClickOnExpression}>{rhs}</button>
            {/* {")"} */}
        </span>
    );
}
