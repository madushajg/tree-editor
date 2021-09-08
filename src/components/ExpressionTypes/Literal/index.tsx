import React, { useState } from "react";
import { Expression, Literal } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import * as c from "../../../constants";
import { addExpression } from "../../../utils/utils";

interface LiteralProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}

export function LiteralC(props: LiteralProps) {
    const { model, callBack } = props;
    let value: any;

    const onClickOnExpression = (e: any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind(c.LITERAL), model)
    };


    const [isDoubleClick, setIsDoubleClick] = useState (true);
    const [literal, setLiteral] = useState ("");

    

    if (model.kind === c.LITERAL) {

        const literalModel: Literal = model.expressionType as Literal;
        value = literalModel?.value ? literalModel.value : "expression";
    }

    
    const inputblur = (event:  React.FocusEvent<HTMLInputElement>) => {
        if (literal !==""){
            addExpression(model, "literal", literal)
        }        
    };

    const inputChangeHandler = (event:  React.KeyboardEvent<HTMLSpanElement>) => {
        
        setLiteral(event.currentTarget.textContent ? event.currentTarget.textContent : "");
    };

    const inputEnterHandler = (event:  React.KeyboardEvent<HTMLSpanElement>) => {
        if (event.code === "Enter" || event.code === "Tab"){
            addExpression(model, "literal", event.currentTarget.textContent);
        }
        
      };
      
    return (

        <>
            {
            isDoubleClick?(


        <span className="App-expression-block App-expression-block-element" onDoubleClick={() => {
                setIsDoubleClick(false)
              }}>{value}</span>
        
               ):(
                  <span         onKeyDown={inputEnterHandler} contentEditable={true} onBlur={inputblur} onInput = {inputChangeHandler}
                  > {value} </span>)
                }
            </>

    );
}
