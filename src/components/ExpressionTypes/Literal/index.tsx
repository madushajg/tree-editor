import React from "react";
import { Expression, Literal } from "../../../models/definitions";

interface LiteralProps {
    model: Expression
}

export function LiteralC(props: LiteralProps) {
    const {model} = props;
    let value: any;
    
    if (model.kind === "LiteralC" ) {
        const literalModel: Literal = model.expressionType as Literal;
        value = literalModel.value;
    }

    return (
        <div id="literal">
            <h5>{value}</h5>
        </div>
    );
}
