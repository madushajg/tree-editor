import React from "react";
import { Relational, Expression } from "../../../models/definitions";
import { addExpression } from "../../../utils/utils";
import { ExpressionComponent } from "../../Expression";

interface RelationalProps {
    model: Expression
    callback: (exp: Expression) => void
}

export function RelationalC(props: RelationalProps) {
    let expCount = 0;
    const {model, callback} = props;
    let lhs: any;
    let rhs: any;
    let operator: string;
    
    if (model.kind === "RelationalC" ) {
        const relationalModel: Relational = model.expressionType as Relational;
        lhs = <ExpressionComponent model={relationalModel.lhsExp} callback={callback} isRoot={false} />;
        rhs = <ExpressionComponent model={relationalModel.rhsExp} callback={callback} isRoot={false} />;
        operator = relationalModel.operator;
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
        <div id="relational">
            {/* <button onClick={() => onClickOnSuggestion(model, "comparision")}>Relational</button> */}
            {lhs}
            <button>operator</button>
            {rhs}
        </div>
    );
}
