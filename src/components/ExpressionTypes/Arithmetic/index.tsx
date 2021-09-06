import React from "react";
import { Arithmatic, Expression } from "../../../models/definitions";
import { ExpressionComponent } from "../../Expression";

interface ArithmeticProps {
    model: Expression
    callback: (exp: string[]) => void
}

export function ArithmeticC(props: ArithmeticProps) {
    let expCount = 0;
    const {model, callback} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmeticC" ) {
        const arithmaticModel: Arithmatic = model.expressionType as Arithmatic;
        lhs = <ExpressionComponent model={arithmaticModel.lhsOperand} callBack={callback} isRoot={false}/>;
        rhs = <ExpressionComponent model={arithmaticModel.rhsOperand} callBack={callback} isRoot={false}/>;
    }

    return (
        <span>
            {/* {"("} */}
            <button className="template-button">{lhs}</button>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operators</button>    
            </span>
            <button className="template-button">{rhs}</button>
            {/* {")"} */}
        </span>
    );
}
