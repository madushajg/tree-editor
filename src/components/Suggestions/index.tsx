import React from "react";
import { getOperatorSuggestions, getSuggestionsBasedOnExpressionKind } from "../../utils";

import '../MainContainer/styles.css';

interface SuggestionsProps {
    kind: string,
    operator : boolean
}
export function Suggestions (props:SuggestionsProps) {
    const { kind , operator} = props;
    var suggestionList: string[] = [];
    if (operator) {
        suggestionList = getOperatorSuggestions(kind);
    } else {
        suggestionList = getSuggestionsBasedOnExpressionKind(kind);
    }

    return(
        <div className="App-suggestion-block">
        {suggestionList.map(suggetion => ( 
            <button className="suggestion-buttons ">{suggetion}</button> // onclick we should update the model and get the kind and update the list
        ))}
        </div>
       
    );
}
