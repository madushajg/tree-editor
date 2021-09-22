import { Expression } from '../models/definitions';
import * as c from "../constants";
import { BinaryExpression, STNode } from '../models/syntax-tree-interfaces';

export function deleteExpression(model: Expression) {
    delete model.expressionType;
}

export function addOperator(model: STNode, kind: any) {
    let expression: any = model;
    if ("typeDescriptor" in expression) {
        expression.typeDescriptor = kind
    } else {
        expression.operator.value = kind
    }
}

export function addExpression(model: STNode, kind: string, value?: any) {
    if (kind === c.ARITHMETIC) {
        Object.assign(model, createArithmetic(value));
    } else if (kind === c.RELATIONAL) {
        Object.assign(model, createRelational(value));
    } else {
        console.log(`Unsuported kind. (${kind})`);
    }
}

function createArithmetic(operator: "*" | "/" | "%" | "+" | "-" | "operator"): BinaryExpression {
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
    };
}

function createRelational(operator: "*" | "/" | "%" | "+" | "-" | "operator"): BinaryExpression {
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

// export const ExpressionSuggestionsByKind : {[key: string]: string[]} = {
//     literal : ["comparison", "logical", "arithmetic"],
//     comparison : ["arithmetic", "conditional", "type-checks"],
//     relational : ["arithmetic", "conditional", "type-checks"],
//     ArithmeticC : ["literal","ArithmeticC", "conditional"],
//     logical : ["conditional"],
//     conditional : ["literal"]
// }

export const ExpressionSuggestionsByKind: { [key: string]: string[] } = {
    LiteralC: [],
    // comparison : [c.ARITHMETIC, c.CONDITIONAL, "type-checks"],
    RelationalC: [c.ARITHMETIC, c.CONDITIONAL, c.TYPE_CHECK, c.RELATIONAL, c.LITERAL],
    ArithmeticC: [c.LITERAL, c.ARITHMETIC, c.CONDITIONAL],
    LogicalC: [c.RELATIONAL, c.LOGICAL, c.CONDITIONAL, c.LITERAL],
    ConditionalC: [c.LITERAL, c.RELATIONAL, c.TYPE_CHECK, c.CONDITIONAL],
    EqualityC: [c.ARITHMETIC, c.CONDITIONAL, c.LITERAL, c.STRING_TEMPLATE,],
    DefaultBooleanC: [c.RELATIONAL, c.EQUALITY, c.LOGICAL, c.LITERAL, c.TYPE_CHECK, c.CONDITIONAL, c.UNARY],
    TypeCheckC: [c.LITERAL, c.CONDITIONAL   ],
    UnaryC: [c.LITERAL, c.RELATIONAL, c.EQUALITY, c.ARITHMETIC],
    StringTemplateC: [c.STRING_TEMPLATE, c.ARITHMETIC, c.CONDITIONAL]
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

// export const STKindByKind: { [key: string]: string } = {
//     RelationalC: "BinaryExpression",
//     ArithmeticC: "BinaryExpression",
//     LogicalC: "BinaryExpression",
//     ConditionalC: "ConditionalExpression",
//     EqualityC: "BinaryExpression",
//     TypeCheckC: "TypeTestExpression",
//     UnaryC: "UnaryExpression",
//     StringTemplateC: "StringTemplateExpression"
// }


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

export const OperatorsForExpressionKind: { [key: string]: string[] } = {
    ArithmeticC: ["+ ", "- ", "* ", "/ ", "% "],
    RelationalC: ["> ", ">= ", "< ", "<= "],
    EqualityC: ["== ", "!= ", "=== ", "!== "],
    LogicalC: ["&& ", "|| "],
    UnaryC: ["+ ", "- ", "! ", "~ "],
    // comparison: [">","<",">=","<=","==","!=","===","!=="],
    ShiftC: ["<< ", ">> ", ">>> "],
    RangeC: ["... ", "..< "]
}
