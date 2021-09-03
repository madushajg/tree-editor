
import { Arithmatic, Comparison, Conditional, Expression, Literal, TypeCheck, Variable } from '../models/definitions';



export function deleteExpression (model: Expression ) {
    delete model.expressionType;
}

export function addExpression (model: Expression, type: string, value?: any ){
    model['kind'] = type;
    var expressionTemplate: TypeCheck
    | Conditional
    | Literal
    | Arithmatic
    | Variable
    | Comparison
    | Expression;

    if (type == 'literal'){
        expressionTemplate = createLiteral(value);
    
    } else if(type == 'comparison'){
        expressionTemplate = createComparison(value);
    } else if (type == 'conditional'){
        expressionTemplate = createConditional();
    } else if (type == 'arithmatic'){
        expressionTemplate = createArithmatic(value);
    } else if( type == 'variable'){
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

function createComparison (operator:  ">" | ">=" | "<" | "<=" | "==" | "!="): Comparison{
    return { lhsExp : {type: ["int", "float", "decimal"], kind: "literal",},
            operator: operator,
            rhsExp: {type: ["int", "float", "decimal"], kind: "literal",} };
}

function createArithmatic ( operator: "*" | "/" | "%" | "+" | "-"): Arithmatic {
    return { lhsOperand : {type: ["int", "float", "decimal"], kind: "literal",},
            operator: operator,
            rhsOperand: {type: ["int", "float", "decimal"], kind: "literal",} };

}

function createConditional(): Conditional {
     return { condition: {type: ["int", "float", "decimal"], kind: "literal",},
            keyWord1: '?',
            trueExpr: {type: ["int", "float", "decimal"], kind: "literal",},
            keyWord2: ':',
            falseExpr: {type: ["int", "float", "decimal"], kind: "literal",}
}
     
}

function createTypeCheck (type: "string" | "int" | "float" | "boolean"): TypeCheck {
    return{ value: {type: ["int", "float", "decimal"], kind: "literal",},
            keyWord: "is",
            typeDescriptor: type
    }
}
export const ExpressionSuggestionsByKind : {[key: string]: string[]} = {
    literal : ["comparison", "logical", "arithmetic"],
    comparison : ["arithmetic", "conditional", "type-checks"],
    arithmetic : ["literal","arithmetic", "conditional"],
    logical : ["conditional"]
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