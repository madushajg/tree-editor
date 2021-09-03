import React from "react";
import { Expression } from "../../models/definitions";
import {getExpressionTypeComponent} from "../../utils";

interface ExpressionComponentProps {
    model: Expression
    callback: (exp: Expression) => void
}

export function ExpressionComponent(props: ExpressionComponentProps) {
    const { model, callback } = props;

    const component = getExpressionTypeComponent(model);

    const onClickWholeExpression = () => {
        callback(model);
    };

    return (
        <div onClick={onClickWholeExpression}>
            {/* <h5>expComp</h5> */}
            {component}
        </div>
    );

}