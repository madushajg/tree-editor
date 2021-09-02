
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
    | Expression;

    if (type == 'literal'){
        expressionTemplate = createLiteral(value);
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
            trueExpr: {type: ["int", "float", "decimal"], kind: "literal",},
            falseExpr: {type: ["int", "float", "decimal"], kind: "literal",}
     }
}

function createTypeCheck (type: "string" | "int" | "float" | "boolean"): TypeCheck {
    return{ value: {type: ["int", "float", "decimal"], kind: "literal",},
            keyWord: "is",
            typeDescriptor: type
    }
}