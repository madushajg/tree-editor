import React from "react";
import { Relational, Expression } from "../../../models/definitions";
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

    const onClickWholeExpression = () => {
        callback(model);
    };

    return (
        <div onClick={onClickWholeExpression}>
            <h5>relational</h5>
            {lhs}
            {rhs}
        </div>
    );
}
