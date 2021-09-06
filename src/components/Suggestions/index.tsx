import React, { useEffect, useState } from "react";
import { callbackify } from "util";
import { Expression } from "../../models/definitions";
import { addExpression } from "../../utils/utils";

import '../MainContainer/styles.css';

interface SuggestionsProps {
    model: Expression
    suggestions: string[],
    operator : boolean,
    callBack: (model: Expression) => void
}

export function Suggestions (props:SuggestionsProps) {
    const { model, suggestions , operator, callBack} = props;

    const onClickSuggestion = (kind: string, operator: boolean, model: Expression) => {
        addExpression(model, kind);
        callBack(model)
        console.log("++++++++++++++++after++++++++++++++++++++")
        console.log(model)
        console.log(kind)
        console.log("++++++++++++++++after++++++++++++++++++++")
    }

    return(
        <div className="App-suggestion-block">
        {suggestions.map(suggetion => (
            <button className="suggestion-buttons" onClick={()=>onClickSuggestion(suggetion, false, model)}>{suggetion}</button>
        ))}
        </div>
    );
}
