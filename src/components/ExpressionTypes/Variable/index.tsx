import React from "react";
import { Expression, Variable } from "../../../models/definitions";

interface VariableProps {
    model: Expression
}

export function VariableC(props: VariableProps) {
    const {model} = props;
    let name: any;
    
    if (model.kind === "VariableC" ) {
        const variableModel: Variable = model.expressionType as Variable;
        name = variableModel.name;
    }

    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
}
