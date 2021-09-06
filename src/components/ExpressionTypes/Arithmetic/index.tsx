import React from "react";
import { Arithmatic, Expression } from "../../../models/definitions";
import { getOperatorSuggestions } from "../../../utils";
import { ExpressionComponent } from "../../Expression";
import { Suggestions } from "../../Suggestions";

interface ArithmeticProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression, operator:boolean) => void
}

export function ArithmeticC(props: ArithmeticProps) {
    let expCount = 0;
    const {model, callBack} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmeticC" ) {
        const arithmaticModel: Arithmatic = model.expressionType as Arithmatic;
        lhs = <ExpressionComponent model={arithmaticModel.lhsOperand} callBack={callBack} isRoot={false}/>;
        rhs = <ExpressionComponent model={arithmaticModel.rhsOperand} callBack={callBack} isRoot={false}/>;
    }


    const onClickOperator = () => {
        callBack(getOperatorSuggestions("ArithmeticC"), model, true)
        console.log("operator model")
        console.log(model)

    }

    return (
        <span>
            {/* {"("} */}
            <button className="template-button">{lhs}</button>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button" onClick={()=> onClickOperator()}>operators</button>    
            </span>
            <button className="template-button">{rhs}</button>
            {/* {")"} */}
        </span>
    );
}
