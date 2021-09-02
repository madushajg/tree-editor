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

export function getExpressionTypeComponent(kind: string) {
    return null
}
