import { Arithmetic, Conditional, Equality, Expression, Literal, Logical, Relational, TypeCheck, Variable } from '../models/definitions';
import * as c from "../constants";

export function deleteExpression(model: Expression) {
    delete model.expressionType;
}

export function addOperator(model: Expression, kind: any) {
    let expression: any = model.expressionType
    expression.operator = kind
}

export function addExpression(model: Expression, kind: string, value?: any) {
    model['kind'] = kind;
    var expressionTemplate: TypeCheck
        | Conditional
        | Literal
        | Arithmetic
        | Variable
        | Relational
        | Equality
        | Logical
        | Expression;

    if (kind === c.LITERAL) {
        expressionTemplate = createLiteral(value);
    } else if (kind === c.RELATIONAL) {
        expressionTemplate = createRelational(value);
    } else if (kind === c.EQUALITY) {
        expressionTemplate = createEquality(value);
    } else if (kind === c.CONDITIONAL) {
        expressionTemplate = createConditional();
    } else if (kind === c.ARITHMETIC) {
        expressionTemplate = createArithmetic(value);
    } else if (kind === c.LOGICAL) {
        expressionTemplate = createLogical(value);
    } else if (kind === c.VARIABLE) {
        expressionTemplate = createVariable(value);
    } else {
        expressionTemplate = createTypeCheck(value);
    }

    model['expressionType'] = expressionTemplate;
}


function createLiteral(value: any): Literal {
    return { value: value };
}

function createVariable(name: string): Variable {
    return { name: name };
}

function createRelational(operator: ">" | ">=" | "<" | "<=" | "operator"): Relational {
    return {
        lhsExp: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        operator: operator,
        rhsExp: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, }
    };
}

function createEquality(operator: "==" | "!=" | "operator"): Equality {
    return {
        lhsExp: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        operator: operator,
        rhsExp: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, }
    };
}

function createArithmetic(operator: "*" | "/" | "%" | "+" | "-" | "operator"): Arithmetic {
    return {
        lhsOperand: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        operator: operator,
        rhsOperand: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, }
    };

}

function createConditional(): Conditional {
    return {
        condition: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        keyWord1: '?',
        trueExpr: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        keyWord2: ':',
        falseExpr: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, }
    }
}

function createLogical(operator: "&&" | "||" | "operator"): Logical {
    return {
        lhsComponent: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        operator: operator,
        rhsComponent: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, }
    };
}

function createTypeCheck(type: "string" | "int" | "float" | "boolean"): TypeCheck {
    return {
        value: { type: ["int", "float", "decimal"], kind: c.DEFAULT_BOOL, },
        keyWord: "is",
        typeDescriptor: type
    }
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
    comparison: [c.ARITHMETIC, c.CONDITIONAL, "type-checks"],
    RelationalC: [c.ARITHMETIC, c.CONDITIONAL, "type-checks", c.RELATIONAL],
    ArithmeticC: [c.LITERAL, c.ARITHMETIC, c.CONDITIONAL],
    LogicalC: [c.CONDITIONAL],
    ConditionalC: [c.LITERAL, c.CONDITIONAL],
    EqualityC: [c.ARITHMETIC, c.CONDITIONAL],
    DefaultBooleanC: [c.RELATIONAL, c.EQUALITY, c.LOGICAL, c.ARITHMETIC, c.CONDITIONAL, c.LITERAL],
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
    comparison: ["int", "decimal", "float", "string"],
    literal: ["boolean", "int", "string", "float", "decimal"],
    arithmetic: ["int", "decimal", "float", "string"]
}

export const OperatorsForExpressionKind: { [key: string]: string[] } = {
    ArithmeticC: ["+ ", "- ", "* ", "/ ", "% "],
    RelationalC: ["> ", ">= ", "< ", "<= "],
    LogicalC: ["&&", "||"],
    UnaryC: ["+", "-", "!", "~"],
    comparison: [">", "<", ">=", "<=", "==", "!=", "===", "!=="],
    shift: ["<<", ">>", ">>>"],
    range: ["...", "..<"]
}
