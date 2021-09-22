import React from 'react';
import { ReactNode } from 'react';
import { ExpressionKindByOperator, ExpressionSuggestionsByKind, OperatorsForExpressionKind, TypesForExpressionKind } from "./utils";
import * as expressionTypeComponents from '../components/ExpressionTypes';
import { STNode } from '../models/syntax-tree-interfaces';

export function getSuggestionsBasedOnExpressionKind(kind: string): string[] {
   return ExpressionSuggestionsByKind[kind];
}

export function getKindBasedOnOperator(operator: string): string {
   return ExpressionKindByOperator[operator];
}

export function getTypesBasedOnExpressionKind(kind: string): string[] {
   return TypesForExpressionKind[kind];
}

export function getOperatorSuggestions(kind: string): string[] {
   if (kind in OperatorsForExpressionKind) {
      return OperatorsForExpressionKind[kind];
   }
   return []; // we can remove the empty array return if we only set the operator prop to true for the expressions with operators
}

export function getExpressionTypeComponent(expression: STNode, callBack: (suggestions: string[], model: STNode, operator: boolean) => void): ReactNode {
   const ExprTypeComponent = (expressionTypeComponents as any)[expression.kind];

   if (!ExprTypeComponent) {
   }

   return <ExprTypeComponent model={expression} callBack={callBack} />;
}

// export function getSuggestionBasedOnExpressionType(Type: string[]): string[] {
//    var typesArray: string[] = [];
//    Type.map(type => (
//       typesArray = typesArray.concat(ExpressionSuggestionByType[type])))
//    return typesArray;
// }

