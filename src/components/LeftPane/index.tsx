import React from "react";
import {Expression} from '../../models/definitions'
import {getSuggestionsBasedOnExpressionKind} from "../../utils/index"

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

    var suggestionList = getSuggestionsBasedOnExpressionKind("literal");
    

    return (
        <div className="App-leftPane">
            <h2 className="App-leftPane-heading">Conditional Statement</h2>
            <div className="App-statement-template-editor"></div>
            <div className="App-context-sensitivePane">
                {suggestionList.map(suggetion => ( 
                    <button className="suggestion-buttons ">{suggetion}</button> // onclick we should update the model and get the kind and update the list
                ))}
            </div>
        </div>
    );
}
