import { ExpressionSuggestionsByKind, OperatorsForExpressionKind } from "./utils";
// import { ExpressionSuggestionByType } from "./utils";

export function getSuggestionsBasedOnExpressionKind(kind: string): string[] {
   return ExpressionSuggestionsByKind[kind];
}

export function getOperatorSuggestions(kind:string) : string[] {
   console.log(OperatorsForExpressionKind[kind])
   if (kind in OperatorsForExpressionKind) {
      return OperatorsForExpressionKind[kind];
   }
   return []; // we can remove the empty array return if we only set the operator prop to true for the expressions with operators
}

// export function getSuggestionBasedOnExpressionType(Type: string[]): string[] {
//    var typesArray: string[] = [];
//    Type.map(type => (
//       typesArray = typesArray.concat(ExpressionSuggestionByType[type])))
//    return typesArray;
// }