import React, { useEffect, useState } from "react";
import { Expression } from "../../models/definitions";
import { addExpression } from "../../utils/utils";

import '../MainContainer/styles.css';

interface SuggestionsProps {
    model: Expression
    suggestions: string[],
    operator : boolean
}

export function Suggestions (props:SuggestionsProps) {
    const { model, suggestions , operator} = props;
    

    const onClickSuggestion = (kind: string, operator: boolean) => {
        console.log("++++++++++++++++before++++++++++++++++++++")
        console.log(model)
        console.log("++++++++++++++++before++++++++++++++++++++")
        addExpression(model, kind);
        console.log("++++++++++++++++after++++++++++++++++++++")
        console.log(model)
        console.log("++++++++++++++++after++++++++++++++++++++")
    }

    return(
        <div className="App-suggestion-block">
        {suggestions.map(suggetion => (
            <button className="suggestion-buttons" onClick={() => onClickSuggestion(suggetion, operator)}>{suggetion}</button>
        ))}
        </div>
    );
}
