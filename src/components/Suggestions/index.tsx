import React from "react";
import { getSuggestionsBasedOnExpressionKind } from "../../utils";

import '../MainContainer/styles.css';

interface SuggestionsProps {
    kind: string
}
export function Suggestions (props:SuggestionsProps) {
    const { kind } = props;
    var suggestionList = getSuggestionsBasedOnExpressionKind(kind);

    return(
        <div className="App-suggestion-block">
        {suggestionList.map(suggetion => ( 
            <button className="suggestion-buttons ">{suggetion}</button> // onclick we should update the model and get the kind and update the list
        ))}
        </div>
    );
}
