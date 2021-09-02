import React from "react";
import {Expression} from '../../models/definitions'

import '../MainContainer/styles.css';
import { Suggestions } from "../Suggestions";

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


    return (
        <div className="App-leftPane">
            <h2 className="App-leftPane-heading">Conditional Statement</h2>
            <div className="App-statement-template-editor"></div>
            <div className="App-context-sensitivePane">
                <Suggestions kind={"comparison"} operator={false}/>
            </div>
        </div>
    );
}
