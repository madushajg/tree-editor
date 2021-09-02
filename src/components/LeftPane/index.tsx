import React from "react";
import {Expression} from '../../models/definitions'
import { getExpressionTypeComponent } from "../../utils/utils";
import { ExpressionComponent } from "../Expression";

import '../MainContainer/styles.css';
import { Suggestions } from "../Suggestions";

export function LeftPane() {

    // if (var1 + var2) > 10
    const sampleModel: Expression = {
        type: ["boolean"],
        kind: "RelationalC",
        expressionType: {
            lhsExp: {
                type: ["int", "float", "decimal"],
                kind: "ArithmaticC",
                expressionType: {
                    lhsOperand: {
                        type: ["int", "float", "decimal", "string"],
                        kind: "VariableC",
                        expressionType: {
                            name: "var1"
                        }
                    },
                    operator: "+",
                    rhsOperand: {
                        type: ["int", "float", "decimal", "string"],
                        kind: "VariableC",
                        expressionType: {
                            name: "var2"
                        }
                    }
                }
            },
            operator: ">",
            rhsExp: {
                type: ["int", "float", "decimal"],
                kind: "LiteralC",
                expressionType: {
                    value: 10
                }
            }
        }
    }

    // const sampleModel: Expression = {
    //     type: ["boolean"],
    //     kind: "ArithmaticC",
    //     expressionType: {
    //         lhsOperand: {
    //             type: ["int", "float", "decimal"],
    //             kind: "LiteralC",
    //             expressionType: {
    //                 value: 10
    //             }
    //         },
    //         operator: "+",
    //         rhsOperand: {
    //             type: ["int", "float", "decimal"],
    //             kind: "LiteralC",
    //             expressionType: {
    //                 value: 20
    //             }
    //         }
    //     }
    // }

    const onClickButton = () => {
        getExpressionTypeComponent(sampleModel)
    }


    return (
        <div className="App-leftPane">
            <h2 className="App-leftPane-heading">Conditional Statement</h2>
            <div className="App-statement-template-editor">
                <ExpressionComponent model={sampleModel} callback={onClickButton}/>
            </div>
            <div className="App-context-sensitivePane">
                <Suggestions kind={"comparison"} operator={false}/>
            </div>

        </div>
    );
}
