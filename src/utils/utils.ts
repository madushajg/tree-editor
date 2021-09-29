import { Expression } from '../models/definitions';
import * as c from "../constants";
import { BinaryExpression, BracedExpression, StringLiteral, STNode } from '../models/syntax-tree-interfaces';

export interface Operator {
    value: string,
    kind: string
}

export function deleteExpression(model: Expression) {
    delete model.expressionType;
}

export function addOperator(model: STNode, operator: Operator) {
    let expression: any = model;
    if ("typeDescriptor" in expression) {
        expression.typeDescriptor = operator.value;
    } else {
        expression.operator.value = operator.value;
        expression.operator.kind = operator.kind;
    }
}

export function addExpression(model: any, kind: string, value?: any) {
    const initialKeys = Object.keys(model);
    initialKeys.forEach((key) => {
        delete model[key];
    });

    if (kind === c.ARITHMETIC) {
        Object.assign(model, createArithmetic());
    } else if (kind === c.RELATIONAL) {
        Object.assign(model, createRelational());
    } else if (kind === c.EQUALITY) {
        Object.assign(model, createEquality());
    } else if (kind === c.LITERAL) {
        if (value) {
            Object.assign(model, createLiteral(value));
        } else {
            Object.assign(model, createLiteral("expression"));
        }
    } else {
        console.log(`Unsupported kind. (${kind})`);
    }
}

function createArithmetic(): BracedExpression {
    return {
        kind: "BracedExpression",
        source: "",
        closeParen: {
            kind: "CloseParenToken",
            isToken: true,
            value: ")",
            source: "",
        },
        expression: {
            kind: "BinaryExpression",
            lhsExpr: {
                kind: "NumericLiteral",
                literalToken: {
                    kind: "DecimalIntegerLiteralToken",
                    isToken: false,
                    value: "expression",
                    source: ""
                },
                source: ""
            },
            operator: {
                kind: "PlusToken",
                isToken: false,
                value: "+",
                source: ""
            },
            rhsExpr: {
                kind: "NumericLiteral",
                literalToken: {
                    kind: "DecimalIntegerLiteralToken",
                    isToken: false,
                    value: "expression",
                    source: ""
                },
                source: ""
            },
            source: ""
        },
        openParen: {
            kind: "OpenParenToken",
            isToken: true,
            value: "(",
            source: ""
        }
    };
}

function createRelational(): BinaryExpression {
    return {
        kind: "BinaryExpression",
        lhsExpr: {
            kind: "NumericLiteral",
            literalToken: {
                kind: "DecimalIntegerLiteralToken",
                isToken: false,
                value: "expression",
                source: ""
            },
            source: ""
        },
        operator: {
            kind: "GtToken",
            isToken: false,
            value: ">",
            source: ""
        },
        rhsExpr: {
            kind: "NumericLiteral",
            literalToken: {
                kind: "DecimalIntegerLiteralToken",
                isToken: false,
                value: "expression",
                source: ""
            },
            source: ""
        },
        source: ""
    };
}

function createEquality(): BinaryExpression {
    return {
        kind: "BinaryExpression",
        lhsExpr: {
            kind: "NumericLiteral",
            literalToken: {
                kind: "DecimalIntegerLiteralToken",
                isToken: false,
                value: "expression",
                source: ""
            },
            source: ""
        },
        operator: {
            kind: "TrippleEqualToken",
            isToken: false,
            value: "===",
            source: ""
        },
        rhsExpr: {
            kind: "NumericLiteral",
            literalToken: {
                kind: "DecimalIntegerLiteralToken",
                isToken: false,
                value: "expression",
                source: ""
            },
            source: ""
        },
        source: ""
    };
}

function createLiteral(value: string) : StringLiteral {
    return {
        "kind": "StringLiteral",
        "literalToken": {
            "kind": "StringLiteralToken",
            "isToken": true,
            "value": value,
            "source": ""
        },
        "source": ""        
    };
}

export const ExpressionSuggestionsByKind: { [key: string]: string[] } = {
    Literal: [],
    Relational: [c.ARITHMETIC, c.CONDITIONAL, c.TYPE_CHECK, c.RELATIONAL, c.LITERAL],
    Arithmetic: [c.LITERAL, c.ARITHMETIC, c.CONDITIONAL],
    Logical: [c.RELATIONAL, c.LOGICAL, c.CONDITIONAL, c.LITERAL],
    Conditional: [c.LITERAL, c.RELATIONAL, c.TYPE_CHECK, c.CONDITIONAL],
    Equality: [c.ARITHMETIC, c.CONDITIONAL, c.LITERAL, c.STRING_TEMPLATE,],
    DefaultBoolean: [c.RELATIONAL, c.EQUALITY, c.LOGICAL, c.LITERAL, c.TYPE_CHECK, c.CONDITIONAL, c.UNARY],
    TypeCheck: [c.LITERAL, c.CONDITIONAL   ],
    Unary: [c.LITERAL, c.RELATIONAL, c.EQUALITY, c.ARITHMETIC],
    StringTemplate: [c.STRING_TEMPLATE, c.ARITHMETIC, c.CONDITIONAL]
}

export const ExpressionKindByOperator: { [key: string]: string } = {
    AsteriskToken: c.ARITHMETIC,
    BitwiseAndToken: c.ARITHMETIC,
    BitwiseXorToken: c.ARITHMETIC,
    DoubleDotLtToken: c.ARITHMETIC,
    DoubleEqualToken: c.EQUALITY,
    EllipsisToken: c.ARITHMETIC,
    ElvisToken: c.ARITHMETIC,
    GtEqualToken: c.RELATIONAL,
    GtToken: c.RELATIONAL,
    LogicalAndToken: c.LOGICAL,
    LogicalOrToken: c.LOGICAL,
    LtEqualToken: c.RELATIONAL,
    LtToken: c.RELATIONAL,
    NotDoubleEqualToken: c.EQUALITY,
    NotEqualToken: c.EQUALITY,
    PercentToken: c.ARITHMETIC,
    PipeToken: c.ARITHMETIC,
    PlusToken: c.ARITHMETIC,
    SlashToken: c.ARITHMETIC,
    TrippleEqualToken: c.EQUALITY
}

// Since there is no LS backend,we will not be able to find the type
// export const ExpressionSuggestionByType : {[key: string]: string[]}= {
//    "int"  : ["comparison", "logical", "arithmetic","shift-expr","unary-expr"],
//    "float" : ["comparison", "logical", "arithmetic","shift-expr","unary-expr"],
//    "decimal" : ["comparison", "logical", "arithmetic","shift-expr","unary-expr"],
//    "boolean" : ["comparison", "logical", "literal","shift-expr","unary-expr"], // negation
//    "string" : ["string-template", "arithmetic", "literal"]

// }

export const TypesForExpressionKind: { [key: string]: string[] } = {
    TypeCheckC: ["string ", "int ", "float ", "decimal ", "boolean ", "error "]
    // comparison : ["int","decimal","float","string"],
    // literal : ["boolean", "int", "string", "float", "decimal"],
    // arithmetic : ["int","decimal","float","string"]
}

// export const OperatorsForExpressionKind: { [key: string]: string[] } = {
//     ArithmeticC: ["+ ", "- ", "* ", "/ ", "% "],
//     RelationalC: ["> ", ">= ", "< ", "<= "],
//     EqualityC: ["== ", "!= ", "=== ", "!== "],
//     LogicalC: ["&& ", "|| "],
//     UnaryC: ["+ ", "- ", "! ", "~ "],
//     // comparison: [">","<",">=","<=","==","!=","===","!=="],
//     ShiftC: ["<< ", ">> ", ">>> "],
//     RangeC: ["... ", "..< "]
// }

export const OperatorsForExpressionKind: { [key: string]: Operator[] } = {
    Arithmetic: [
        {value: "+", kind: "PlusToken"},
        {value: "-", kind: "MinusToken"},
        {value: "*", kind: "AsteriskToken"},
        {value: "/", kind: "SlashToken"},
        {value: "%", kind: "PercentToken"}
    ],
    Relational: [
        {value: ">", kind: "GtToken"},
        {value: ">=", kind: "GtEqualToken"},
        {value: "<", kind: "LtToken"},
        {value: "<=", kind: "LtEqualToken"}
    ],
    Equality: [
        {value: "==", kind: "DoubleEqualToken"},
        {value: "!=", kind: "NotEqualToken"},
        {value: "===", kind: "TrippleEqualToken"},
        {value: "!==", kind: "NotDoubleEqualToken"}
    ],
    Logical: [
        {value: "&&", kind: "LogicalAndToken"},
        {value: "||", kind: "LogicalOrToken"}
    ],
    Unary: [
        {value: "+", kind: "PlusToken"},
        {value: "-", kind: "MinusToken"},
        {value: "!", kind: "Unknown"},
        {value: "~", kind: "Unknown"}
    ],
    Shift: [
        {value: "<<", kind: "Unknown"},
        {value: ">>", kind: "Unknown"},
        {value: ">>>", kind: "Unknown"}
    ],
    Range: [
        {value: "...", kind: "Unknown"},
        {value: "..<", kind: "DoubleDotLtToken"}
    ]
}
