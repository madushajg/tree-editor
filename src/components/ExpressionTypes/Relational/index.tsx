import React from "react";
import { Relational, Expression } from "../../../models/definitions";
import { addExpression } from "../../../utils/utils";
import { ExpressionComponent } from "../../Expression";

interface RelationalProps {
    model: Expression
    callback: (exp: Expression) => void
}

export function RelationalC(props: RelationalProps) {
    const {model, callback} = props;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "RelationalC" ) {
        const relationalModel: Relational = model.expressionType as Relational;
        lhs = <ExpressionComponent model={relationalModel.lhsExp} callback={callback}/>;
        rhs = <ExpressionComponent model={relationalModel.rhsExp} callback={callback}/>;
    }

    // const onClickWholeExpression = () => {
    //     callback(model);
    // };

    const onClickOnSuggestion = (model: Expression, kind: string) => {
        console.log(model)
        addExpression(model, kind);
        console.log(model)
    }

    return (
        <div>
            <h5>relational</h5>
            <button onClick={() => onClickOnSuggestion(model, "comparision")}>Relational</button>
            {lhs}
            {rhs}
        </div>
    );
}
