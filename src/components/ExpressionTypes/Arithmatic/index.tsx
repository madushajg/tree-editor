import React from "react";
import { Arithmatic, Expression } from "../../../models/definitions";
import { addExpression } from "../../../utils/utils";
import { ExpressionComponent } from "../../Expression";
import { sampleModel } from "../../LeftPane";

interface ArithmaticProps {
    model: Expression
    callback: (exp: Expression) => void
}

export function ArithmaticC(props: ArithmaticProps) {
    let expCount = 0;
    const {model, callback} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmaticC" ) {
        const arithmaticModel: Arithmatic = model.expressionType as Arithmatic;
        lhs = <ExpressionComponent model={arithmaticModel.lhsOperand} callback={callback} isRoot={false}/>;
        rhs = <ExpressionComponent model={arithmaticModel.rhsOperand} callback={callback} isRoot={false}/>;
    }
    console.log("========before click========")
    console.log(model)
    console.log(sampleModel)
    console.log("========before click========")


    const onClickOnSuggestion = (model: Expression, kind: string) => {
        addExpression(model, kind, "10");
        console.log("========after click========")
        console.log(model)
        console.log(sampleModel)
        console.log("========after click========")
    }

    return (
        <div>
            {/* <h5>arithmatic</h5> */}
            {/* <button onClick={() => onClickOnSuggestion(model, "literal")} className="suggestion-buttons">Arithmatic</button> */}
            {lhs}
            <button>operator</button>
            {rhs}
        </div>
    );
}
