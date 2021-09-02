import { ReactNode } from 'react';
import * as expressionTypeComponents from '../components/ExpressionTypes';
import { Expression } from '../models/definitions';

export function getExpressionTypeComponent(expression: Expression): ReactNode {
    const ExprTypeComponent = (expressionTypeComponents as any)[expression.kind];
    
    if (!ExprTypeComponent) {
    }

    return <ExprTypeComponent model={expression} />;
}
