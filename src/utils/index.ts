import { ExpressionSuggestionsByKind } from "./utils";
// import { ExpressionSuggestionByType } from "./utils";

export function getSuggestionsBasedOnExpressionKind(kind: string): string[] {
   return ExpressionSuggestionsByKind[kind];
}

// export function getSuggestionBasedOnExpressionType(Type: string[]): string[] {
//    var typesArray: string[] = [];
//    Type.map(type => (
//       typesArray = typesArray.concat(ExpressionSuggestionByType[type])))
//    return typesArray;
// }