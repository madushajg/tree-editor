import React from "react";
import {Expression, Comparison} from '../../models/definitions'
import { addExpression } from "../../utils";

import '../MainContainer/styles.css';

export function LeftPane() {

    // if (var1 + var2) > 10
    const sampleModel: Expression = {
        type: ["boolean"],
        kind: "relational",
        expressionType: {
            lhsExp: {
                type: ["int", "float", "decimal"],
                kind: "arithmatic",
                expressionType: {
                    lhsOperand: {
                        type: ["int", "float", "decimal", "string"],
                        kind: "variable",
                        expressionType: {
                            name: "var1"
                        }
                    },
                    operator: "+",
                    rhsOperand: {
                        type: ["int", "float", "decimal", "string"],
                        kind: "variable",
                        expressionType: {
                            name: "var2"
                        }
                    }
                }
            },
            operator: ">",
            rhsExp: {
                type: ["int", "float", "decimal"],
                kind: "literal",
                expressionType: {
                    value: 10
                }
            }
        }
    }
    const x= (sampleModel.expressionType as Comparison).lhsExp;

    addExpression(x, 'conditional');

    console.log(x);
    console.log(sampleModel);
    return (
        <div className="App-leftPane">
            <h2 className="App-leftPane-heading">Conditional Statement</h2>
            <div className="App-statement-template-editor"></div>
            <div className="App-context-sensitivePane"></div>
        </div>
    );
}
