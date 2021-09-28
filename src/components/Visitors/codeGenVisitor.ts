/*
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein is strictly forbidden, unless permitted by WSO2 in accordance with
 * the WSO2 Commercial License available at http://wso2.com/licenses.
 * For specific language governing the permissions and limitations under
 * this license, please see the license as well as any agreement you’ve
 * entered into with WSO2 governing the purchase of this software and any
 * associated services.
 */
import {
    STNode,
    Visitor
} from "@ballerina/syntax-tree";
import { BracedExpression } from "../../models/syntax-tree-interfaces";

const leafKind = ['PlusToken', 'MinusToken', 'AsteriskToken', 'SlashToken', 'PercentToken',
    'GtToken', 'GtEqualToken', 'LtToken', 'LtEqualToken',
    'DoubleEqualToken', 'NotEqualToken', 'TrippleEqualToken', 'NotDoubleEqualToken',
    'LogicalAndToken', 'LogicalOrToken',
    'DoubleDotLtToken',
    // 'CloseParenToken', 'OpenParenToken',
    'DecimalIntegerLiteralToken'];

class CodeGenVisitor implements Visitor {
    private codeSnippet: string = "";

    constructor(initialSnippet: string) {
        this.codeSnippet = initialSnippet;
    }

    public beginVisitSTNode(node: STNode, parent?: STNode) {
        if (leafKind.includes(node.kind)) {
            this.codeSnippet = this.codeSnippet + node.value + " ";
        }
    }

    // public beginVisitNumericLiteral(node: STNode, parent?: STNode) {
    //     if (node.kind === "DecimalIntegerLiteralToken" || node.kind === "PlusToken") {
    //         this.codeSnippet = this.codeSnippet + node.value + " ";
    //     }
    // }

    // public beginVisitPlusToken(node: STNode, parent?: STNode) {
    //     if (node.kind === "DecimalIntegerLiteralToken" || node.kind === "PlusToken") {
    //         this.codeSnippet = this.codeSnippet + node.value + " ";
    //     }
    // }

    public beginVisitBracedExpression(node: STNode, parent?: STNode) {
        const bracedExprNode = node as BracedExpression;
        let open = bracedExprNode.openParen.value;

        this.codeSnippet = this.codeSnippet + open + " ";
    }

    public endVisitBracedExpression(node: STNode, parent?: STNode) {
        const bracedExprNode = node as BracedExpression;
        let close = bracedExprNode.closeParen.value;

        this.codeSnippet = this.codeSnippet + close + " ";
    }

    getCodeSnippet() {
        return this.codeSnippet;
    }

    clearShapeList() {
        this.codeSnippet = "";
    }
}

export const visitor = new CodeGenVisitor("");
