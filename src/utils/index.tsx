import React from 'react';
import { ReactNode } from 'react';
import * as expressionTypeComponents from '../components/ExpressionTypes';
import { Expression } from '../models/definitions';
import { ExpressionSuggestionsByKind, OperatorsForExpressionKind } from "./utils";
// import { ExpressionSuggestionByType } from "./utils";

export function getSuggestionsBasedOnExpressionKind(kind: string): string[] {
   // console.log(`============== getSuggestionsBasedOnExpressionKind =============== : ${kind}`)
   return ExpressionSuggestionsByKind[kind];
}

export function getOperatorSuggestions(kind:string) : string[] {
   console.log(OperatorsForExpressionKind[kind])
   if (kind in OperatorsForExpressionKind) {
      return OperatorsForExpressionKind[kind];
   }
   return []; // we can remove the empty array return if we only set the operator prop to true for the expressions with operators
}

export function getExpressionTypeComponent(expression: Expression, callBack:(suggestions: string[], model: Expression, operator:boolean) => void): ReactNode {
   // console.log(`getExpressionTypeComponent kind ${expression}`)
   const ExprTypeComponent = (expressionTypeComponents as any)[expression.kind];
   
   if (!ExprTypeComponent) {
   }

   return <ExprTypeComponent model={expression} callBack={callBack}/>;
}

// export function getSuggestionBasedOnExpressionType(Type: string[]): string[] {
//    var typesArray: string[] = [];
//    Type.map(type => (
//       typesArray = typesArray.concat(ExpressionSuggestionByType[type])))
//    return typesArray;
// }

