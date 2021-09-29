import React, { useState } from "react";
import * as c from "../../../../constants";
import {
  NumericLiteral,
  STNode,
} from "../../../../models/syntax-tree-interfaces";
import { addExpression } from "../../../../utils/utils";

interface LiteralProps {
  model: STNode;
  callBack: (suggestions: string[], model: STNode, operator: boolean) => void;
}

export function NumericLiteralC(props: LiteralProps) {
  const { model, callBack } = props;

  const [isDoubleClick, setIsDoubleClick] = useState(false);
  const [literal, setLiteral] = useState("");

  let literalModel: NumericLiteral;
  let value: any;

  if (model.kind === "NumericLiteral") {
    literalModel = model as NumericLiteral;
    value = literalModel.literalToken.value;
  }

  // const onClickOnExpression = (e: any) => {
  //     e.stopPropagation()
  //     callBack(getSuggestionsBasedOnExpressionKind(c.LITERAL), literalModel.literalToken)
  // };

  const inputblur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (literal !== "") {
      addExpression(model, c.LITERAL, literal);
      callBack([], model, false);
    }
  };

  const inputChangeHandler = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    setLiteral(
      event.currentTarget.textContent ? event.currentTarget.textContent : ""
    );
  };

  const inputEnterHandler = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.code === "Enter" || event.code === "Tab") {
      addExpression(model, c.LITERAL, event.currentTarget.textContent);
      callBack([], model, false);
    }
  };

  return (
    <>
      {isDoubleClick ? (
        <span
          className="App-expression-block App-expression-block-element"
          onDoubleClick={() => {
            setIsDoubleClick(false);
          }}
        >
          {value}
        </span>
      ) : (
        <span
          onKeyDown={inputEnterHandler}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={inputblur}
          onInput={inputChangeHandler}
        >
          {" "}
          {value}{" "}
        </span>
      )}
    </>
  );
}
