import React from 'react';
import { RightPane } from '../RightPane';
import { LeftPane } from '../LeftPane';
import baseImage from './base.png';

import './styles.css';
import { STNode } from '../../models/syntax-tree-interfaces';
import { sampleModel } from './model';

// if (var1 + var2) > 10
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "RelationalC",
//     expressionType: {
//         lhsExp: {
//             type: ["int", "float", "decimal"],
//             kind: "ArithmeticC",
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
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "RelationalC",
//     expressionType: {
//         lhsExp: {
//             type: ["int", "float", "decimal"],
//             kind: "ArithmeticC",
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
//             kind: "ArithmeticC",
//             expressionType: {
//                 lhsOperand: {
//                     type: ["int", "float", "decimal", "string"],
//                     kind: "VariableC",
//                     expressionType: {
//                         name: "var10"
//                     }
//                 },
//                 operator: "+",
//                 rhsOperand: {
//                     type: ["int", "float", "decimal", "string"],
//                     kind: "VariableC",
//                     expressionType: {
//                         name: "var20"
//                     }
//                 }
//             }
//         }
//     }
// }

// if false
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "LiteralC",
//     // expressionType: {
//     //     value: "false"
//     // }
// }

// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "DefaultBooleanC"
// }

// // if 30 > 40
// export const sampleModel: Expression = {
//     type: ["boolean"],
//     kind: "RelationalC",
//     expressionType: {
//         lhsExp: {
//             type: ["int"],
//             kind: "LiteralC",
//             // expressionType: {
//             //     value: "30"
//             // }
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

const exprModel = sampleModel.condition; 


export function MainContainer() {
    let currentModel: { model: STNode } = {
        model: exprModel
    }

    return (
        <div className="App">
            <img src={baseImage} alt="base" width='100%' />
            <div className="App-tree-editor">
                <LeftPane model={exprModel} currentModel={currentModel} />
                <div className="vl"></div>
                <RightPane />
            </div>
        </div>
    )
}
