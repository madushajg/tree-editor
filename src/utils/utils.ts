
import { Arithmatic, Conditional, Equality, Expression, Literal, Relational, TypeCheck, Variable } from '../models/definitions';

export function deleteExpression (model: Expression ) {
    delete model.expressionType;
}

export function addExpression (model: Expression, kind: string, value?: any ){
    model['kind'] = kind;
    var expressionTemplate: TypeCheck
    | Conditional
    | Literal
    | Arithmatic
    | Variable
    | Relational
    | Equality
    | Expression;

    if (kind === 'LiteralC'){
        expressionTemplate = createLiteral(value);
    
    // } else if(kind === 'ComparisonC') {
    //     expressionTemplate = createComparison(value);
    } else if(kind === 'RelationalC') {
        expressionTemplate = createRelational(value);
    } else if(kind === 'Equality') {
        expressionTemplate = createEquality(value);
    } else if (kind === 'ConditionalC') {
        expressionTemplate = createConditional();
    } else if (kind === 'ArithmeticC') {
        expressionTemplate = createArithmatic(value);
    } else if( kind === 'VariableC') {
        expressionTemplate = createVariable(value);
    } else {
        expressionTemplate = createTypeCheck(value);
    }

    model['expressionType'] = expressionTemplate;
    

}


function createLiteral (value: any): Literal{
    return {value: value};
}

function createVariable (name: string): Variable{
    return {name: name};
}

// function createComparison (operator:  ">" | ">=" | "<" | "<=" | "==" | "!="): Comparison{
//     return { lhsExp : {type: ["int", "float", "decimal"], kind: "LiteralC",},
//             operator: operator,
//             rhsExp: {type: ["int", "float", "decimal"], kind: "LiteralC",} };
// }

function createRelational (operator:  ">" | ">=" | "<" | "<=" | "operator"): Relational {
    return { lhsExp : {type: ["int", "float", "decimal"], kind: "LiteralC",},
            operator: operator,
            rhsExp: {type: ["int", "float", "decimal"], kind: "LiteralC",} };
}

function createEquality (operator:  "==" | "!=" | "operator"): Equality {
    return { lhsExp : {type: ["int", "float", "decimal"], kind: "LiteralC",},
            operator: operator,
            rhsExp: {type: ["int", "float", "decimal"], kind: "LiteralC",} };
}

function createArithmatic ( operator: "*" | "/" | "%" | "+" | "-" | "operator"): Arithmatic {
    return { lhsOperand : {type: ["int", "float", "decimal"], kind: "LiteralC",},
            operator: "operator",
            rhsOperand: {type: ["int", "float", "decimal"], kind: "LiteralC",} };

}

function createConditional(): Conditional {
     return { condition: {type: ["int", "float", "decimal"], kind: "LiteralC",},
            keyWord1: '?',
            trueExpr: {type: ["int", "float", "decimal"], kind: "LiteralC",},
            keyWord2: ':',
            falseExpr: {type: ["int", "float", "decimal"], kind: "LiteralC",}
}
     
}

function createTypeCheck (type: "string" | "int" | "float" | "boolean"): TypeCheck {
    return{ value: {type: ["int", "float", "decimal"], kind: "LiteralC",},
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

export const ExpressionSuggestionsByKind : {[key: string]: string[]} = {
    LiteralC : ["RelationalC", "EqualityC", "LogicalC", "ArithmeticC"],
    comparison : ["ArithmeticC", "ConditionalC", "type-checks"],
    RelationalC : ["ArithmeticC", "ConditionalC", "type-checks"],
    ArithmeticC : ["LiteralC","ArithmeticC", "ConditionalC"],
    LogicalC : ["ConditionalC"],
    ConditionalC : ["LiteralC"]
}


// Since there is no LS backend,we will not be able to find the type
// export const ExpressionSuggestionByType : {[key: string]: string[]}= {
//    "int"  : ["comparison", "logical", "arithmetic","shift-expr","unary-expr"],
//    "float" : ["comparison", "logical", "arithmetic","shift-expr","unary-expr"],
//    "decimal" : ["comparison", "logical", "arithmetic","shift-expr","unary-expr"],
//    "boolean" : ["comparison", "logical", "literal","shift-expr","unary-expr"], // negation
//    "string" : ["string-template", "arithmetic", "literal"]

// }

export const TypesForExpressionKind : {[key: string]: string[]} = {
    comparison : ["int","decimal","float","string"],
    literal : ["boolean", "int", "string", "float", "decimal"],
    arithmetic : ["int","decimal","float","string"]
}

export const OperatorsForExpressionKind : {[key:string]: string[]} = {
    arithmetic : ["+","-","*","/","%"],
    logical : ["&&","||"],
    unary: ["+","-","!","~"],
    comparison: [">","<",">=","<=","==","!=","===","!=="],
    shift : ["<<",">>",">>>"],
    range : ["...","..<"]
}