import React, { useEffect, useState } from "react";
import { getOperatorSuggestions, getSuggestionsBasedOnExpressionKind } from "../../utils";

import '../MainContainer/styles.css';

interface SuggestionsProps {
    kind: string,
    operator : boolean
}

export function Suggestions (props:SuggestionsProps) {
    const { kind , operator} = props;
    const [suggestionList, SetSuggestionsList] = useState<string[]>([]);
   
    useEffect(()=> {
        if (operator) {
            SetSuggestionsList(getOperatorSuggestions(kind));
        } else {
            SetSuggestionsList(getSuggestionsBasedOnExpressionKind(kind))
        }
    }, [])
    

    const onClickSuggestion = (kind: string, operator: boolean) => {
        if (operator) {
            SetSuggestionsList(getOperatorSuggestions(kind));
        } else {
            SetSuggestionsList(getSuggestionsBasedOnExpressionKind(kind))
        }
    }

    return(
        <div className="App-suggestion-block">
        {suggestionList.map(suggetion => ( 
            // onclick we should update the model and get the kind and update the list
            <button className="suggestion-buttons" onClick={() => onClickSuggestion(suggetion, operator)}>{suggetion}</button>
        ))}
        </div>
       
    );
}
