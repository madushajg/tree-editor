import React from "react";
import { Expression } from "../../models/definitions";
import {getExpressionTypeComponent} from "../../utils";
import { LiteralC } from "../ExpressionTypes";

interface ExpressionComponentProps {
    model: Expression
    callback: (exp: Expression) => void
    isRoot: boolean
}

let expressionCounter = 0;

export function ExpressionComponent(props: ExpressionComponentProps) {
    const { model, callback, isRoot } = props;

    const component = getExpressionTypeComponent(model, expressionCounter++);

    // const onClickWholeExpression = () => {
    //     callback(model);
    // };

    return (
        <span>
            {
                isRoot ?
                <span className="App-expression-block App-expression-block-disabled">
                    {"if"}
                </span> : null
            }
            {/* <span> */}
                {component}
            {/* </span> */}
            {
                isRoot ?
                <span className="App-expression-block App-expression-block-disabled">
                    &nbsp;{"{"}
                    <br/>
                    &nbsp;&nbsp;&nbsp;{"..."}
                    <br/>
                    {"} "}
                    <button className="add-new-expression"> + </button>
                    {" else {"}
                    <br/>
                    &nbsp;&nbsp;&nbsp;{"..."}
                    <br/>
                    {"}"}
                    {"}"}
                </span> : null
            }              
        </span>

        // ############################## if 30 > 40 ##############################

        // <div className="App-expression-component">
        //     <RelationalC model={model} callback={callback}/>
        // </div>

        // <div className="App-expression-component">
        //     <div>
        //         <h5>relational</h5>
        //         <button>Relational</button>
        //         <ExpressionComponent model={model} callback={callback}/>
        //         <ExpressionComponent model={model} callback={callback}/>
        //     </div>
        // </div>

        // <div className="App-expression-component">
        //     <div>
        //         <h5>relational</h5>
        //         <button>Relational</button>
                // <div className="App-expression-component">
                //     <LiteralC model={model}/>
                // </div>
                // <div className="App-expression-component">
                //     <LiteralC model={model}/>
                // </div>
        //     </div>
        // </div>

        // <div className="App-expression-component">
        //     <div>
        //         <h5>relational</h5>
        //         <button>Relational</button>
        //         <div className="App-expression-component">
        //             <div id="literal">
        //                 <h5>30</h5>
        //             </div>
        //         </div>
        //         <div className="App-expression-component">
        //             <div id="literal">
        //                 <h5>30</h5>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // ############################## if false ##############################


        // <div className="App-expression-component">
        //     <LiteralC model={model}/>
        // </div>

        // <div className="App-expression-component">
        //     <div>
        //         <h5>"false"</h5>
        //     </div>
        // </div>

        // #######################################################################
    );

}