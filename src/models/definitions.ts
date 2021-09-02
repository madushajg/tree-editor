export interface Expression {
    type: ("string" | "int" | "float" | "decimal" | "boolean")[],
    kind: string,
    expressionType: 
      | Comparison
      | TypeCheck
      | Conditional
      | Literal
      | Arithmatic
      | Expression
  }
  
export interface Literal {
    value: any
}

export interface Comparison {
    lhs: Expression
    operator: ">" | "<"
    rhs: Expression
}

export interface Arithmatic {
    lhs: Expression
    operator: "+" | "-"
    rhs: Expression
}

export interface TypeCheck {
    lhs: Expression
    operator: "is"
    typeDescriptor: "string" | "int" | "float" | "boolean"
}

export interface Conditional {
    condition: Expression
    trueExpr: Expression
    falseExpr: Expression
}
 export {}