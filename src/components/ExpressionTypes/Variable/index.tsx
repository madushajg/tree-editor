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
        <span className="App-expression-block App-expression-block-element">expression</span>
    );
}
