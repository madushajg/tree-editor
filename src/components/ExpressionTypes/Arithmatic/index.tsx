import React from "react";
import { Arithmatic, Expression } from "../../../models/definitions";
import { ExpressionComponent } from "../../Expression";

interface ArithmaticProps {
    model: Expression
    callback: (exp: Expression) => void
}

export function ArithmaticC(props: ArithmaticProps) {
    const {model, callback} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmaticC" ) {
        const arithmaticModel: Arithmatic = model.expressionType as Arithmatic;
        lhs = <ExpressionComponent model={arithmaticModel.lhsOperand} callback={callback}/>;
        rhs = <ExpressionComponent model={arithmaticModel.rhsOperand} callback={callback}/>;
    }

    const onClickWholeExpression = () => {
        callback(model);
    };

    return (
        <div onClick={onClickWholeExpression}>
            <h5>arithmatic</h5>
            {lhs}

            {rhs}
        </div>
    );
}
