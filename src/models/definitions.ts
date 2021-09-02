export interface Expression {
    type: ("string" | "int" | "float" | "decimal" | "boolean")[],
    kind: string,
    expressionType?: 
      | Equality
      | Relational
      | TypeCheck
      | Conditional
      | Literal
      | Arithmatic
      | Variable
      | Expression
  }
  
export interface Literal {
    value: any
}

export interface Variable {
    name: string
}

export interface Comparison {
    lhsExp: Expression,
    operator: ">" | ">=" | "<" | "<=" | "==" | "!="
    rhsExp: Expression
}

export interface Relational extends Comparison {
    lhsExp: Expression
    operator: ">" | ">=" | "<" | "<="
    rhsExp: Expression
}

export interface Equality extends Comparison {
    lhsExp: Expression
    operator: "==" | "!="
    rhsExp: Expression
}

export interface Arithmatic {
    lhsOperand: Expression
    operator: "*" | "/" | "%" | "+" | "-"
    rhsOperand: Expression
}

export interface TypeCheck {
    value: Expression
    keyWord: "is"
    typeDescriptor: "string" | "int" | "float" | "boolean"
}

export interface Conditional {
    condition: Expression
    trueExpr: Expression
    falseExpr: Expression
}
