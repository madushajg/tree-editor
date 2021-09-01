import React from 'react';

interface Expression {
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
  
  interface Literal {
    value: any
  }
  
  interface Comparison {
    lhs: Expression
    operator: ">" | "<"
    rhs: Expression
  }
  
  interface Arithmatic {
    lhs: Expression
    operator: "+" | "-"
    rhs: Expression
  }
  
  interface TypeCheck {
    lhs: Expression
    operator: "is"
    typeDescriptor: "string" | "int" | "float" | "boolean"
  }
  
  interface Conditional {
    condition: Expression
    trueExpr: Expression
    falseExpr: Expression
  }
  