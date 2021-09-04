import React from "react";
import {Expression, Comparison} from '../../models/definitions'
import { getExpressionTypeComponent } from "../../utils";
import { ExpressionComponent } from "../Expression";

import '../MainContainer/styles.css';
import { Suggestions } from "../Suggestions";

// if (var1 + var2) > 10
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "RelationalC",
//     expressionType: {
//         lhsExp: {
//             type: ["int", "float", "decimal"],
//             kind: "ArithmaticC",
//             expressionType: {
//                 lhsOperand: {
//                     type: ["int", "float", "decimal", "string"],
//                     kind: "VariableC",
//                     expressionType: {
//                         name: "var1"
//                     }
//                 },
//                 operator: "+",
//                 rhsOperand: {
//                     type: ["int", "float", "decimal", "string"],
//                     kind: "VariableC",
//                     expressionType: {
//                         name: "var2"
//                     }
//                 }
//             }
//         },
//         operator: ">",
//         rhsExp: {
//             type: ["int", "float", "decimal"],
//             kind: "LiteralC",
//             expressionType: {
//                 value: 10
//             }
//         }
//     }
// }

// if (var1 + var2) > (var10 + var20)
export const sampleModel: Expression = {
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
            kind: "ArithmaticC",
            expressionType: {
                lhsOperand: {
                    type: ["int", "float", "decimal", "string"],
                    kind: "VariableC",
                    expressionType: {
                        name: "var10"
                    }
                },
                operator: "+",
                rhsOperand: {
                    type: ["int", "float", "decimal", "string"],
                    kind: "VariableC",
                    expressionType: {
                        name: "var20"
                    }
                }
            }
        }
    }
}

// if false
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "LiteralC",
//     // expressionType: {
//     //     value: "false"
//     // }
// }

// // if 30 > 40
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "RelationalC",
//     expressionType: {
//         lhsExp: {
//             type: ["int"],
//             kind: "LiteralC",
//             expressionType: {
//                 value: "30"
//             }
//         },
//         operator: ">",
//         rhsExp: {
//             type: ["int"],
//             kind: "LiteralC",
//             // expressionType: {
//             //     value: "40"
//             // }
//         }
//     }
// }

export function LeftPane() {

    // if (var1 + var2) > 10
    // const sampleModel: Expression = {
    //     type: ["boolean"],
    //     kind: "RelationalC",
    //     expressionType: {
    //         lhsExp: {
    //             type: ["int", "float", "decimal"],
    //             kind: "ArithmaticC",
    //             expressionType: {
    //                 lhsOperand: {
    //                     type: ["int", "float", "decimal", "string"],
    //                     kind: "VariableC",
    //                     expressionType: {
    //                         name: "var1"
    //                     }
    //                 },
    //                 operator: "+",
    //                 rhsOperand: {
    //                     type: ["int", "float", "decimal", "string"],
    //                     kind: "VariableC",
    //                     expressionType: {
    //                         name: "var2"
    //                     }
    //                 }
    //             }
    //         },
    //         operator: ">",
    //         rhsExp: {
    //             type: ["int", "float", "decimal"],
    //             kind: "LiteralC",
    //             expressionType: {
    //                 value: 10
    //             }
    //         }
    //     }
    // }
    // const x= (sampleModel.expressionType as Comparison).lhsExp;

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


    // const sampleModel: Expression = {
    //     type: ["boolean"],
    //     kind: "LiteralC",
    //     expressionType: {
    //         value: "false"
    //     }
    // }

    const onClickButton = () => {
        // getExpressionTypeComponent(sampleModel)
    }


    // console.log(x);
    console.log(sampleModel);
    return (
        <div className="App-leftPane">
            <h3 className="App-leftPane-heading">Conditional Statement</h3>
            <div className="App-statement-template-editor">
                <div className="App-statement-template-editor-inner">
                    <ExpressionComponent model={sampleModel} callback={onClickButton} isRoot={true}/>
                </div>
            </div>
            <div className="App-context-sensitivePane">
                <Suggestions kind={"comparison"} operator={false}/>
            </div>

        </div>
    );
}
