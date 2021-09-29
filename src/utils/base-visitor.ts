// This is an auto-generated file. Do not edit.
// Run 'BALLERINA_HOME="your/ballerina/home" npm run gen-models' to generate.
import * as Ballerina from '../models/syntax-tree-interfaces';

export interface Visitor {
  beginVisitSTNode?(node: Ballerina.STNode, parent?: Ballerina.STNode): void;
  endVisitSTNode?(node: Ballerina.STNode, parent?: Ballerina.STNode): void;

  beginVisitActionStatement?(
    node: Ballerina.ActionStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitActionStatement?(
    node: Ballerina.ActionStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAnnotation?(
    node: Ballerina.Annotation,
    parent?: Ballerina.STNode
  ): void;
  endVisitAnnotation?(
    node: Ballerina.Annotation,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAnyKeyword?(
    node: Ballerina.AnyKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitAnyKeyword?(
    node: Ballerina.AnyKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAnyTypeDesc?(
    node: Ballerina.AnyTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitAnyTypeDesc?(
    node: Ballerina.AnyTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAnydataKeyword?(
    node: Ballerina.AnydataKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitAnydataKeyword?(
    node: Ballerina.AnydataKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAnydataTypeDesc?(
    node: Ballerina.AnydataTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitAnydataTypeDesc?(
    node: Ballerina.AnydataTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitArrayTypeDesc?(
    node: Ballerina.ArrayTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitArrayTypeDesc?(
    node: Ballerina.ArrayTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAsKeyword?(
    node: Ballerina.AsKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitAsKeyword?(
    node: Ballerina.AsKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAssignmentStatement?(
    node: Ballerina.AssignmentStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitAssignmentStatement?(
    node: Ballerina.AssignmentStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAsteriskLiteral?(
    node: Ballerina.AsteriskLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitAsteriskLiteral?(
    node: Ballerina.AsteriskLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAsteriskToken?(
    node: Ballerina.AsteriskToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitAsteriskToken?(
    node: Ballerina.AsteriskToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitAtToken?(node: Ballerina.AtToken, parent?: Ballerina.STNode): void;
  endVisitAtToken?(node: Ballerina.AtToken, parent?: Ballerina.STNode): void;

  beginVisitBacktickContent?(
    node: Ballerina.BacktickContent,
    parent?: Ballerina.STNode
  ): void;
  endVisitBacktickContent?(
    node: Ballerina.BacktickContent,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBacktickToken?(
    node: Ballerina.BacktickToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitBacktickToken?(
    node: Ballerina.BacktickToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBase16Keyword?(
    node: Ballerina.Base16Keyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitBase16Keyword?(
    node: Ballerina.Base16Keyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBase64Keyword?(
    node: Ballerina.Base64Keyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitBase64Keyword?(
    node: Ballerina.Base64Keyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBinaryExpression?(
    node: Ballerina.BinaryExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitBinaryExpression?(
    node: Ballerina.BinaryExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBitwiseAndToken?(
    node: Ballerina.BitwiseAndToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitBitwiseAndToken?(
    node: Ballerina.BitwiseAndToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBitwiseXorToken?(
    node: Ballerina.BitwiseXorToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitBitwiseXorToken?(
    node: Ballerina.BitwiseXorToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBlockStatement?(
    node: Ballerina.BlockStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitBlockStatement?(
    node: Ballerina.BlockStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBooleanKeyword?(
    node: Ballerina.BooleanKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitBooleanKeyword?(
    node: Ballerina.BooleanKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBooleanLiteral?(
    node: Ballerina.BooleanLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitBooleanLiteral?(
    node: Ballerina.BooleanLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBooleanTypeDesc?(
    node: Ballerina.BooleanTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitBooleanTypeDesc?(
    node: Ballerina.BooleanTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBracedExpression?(
    node: Ballerina.BracedExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitBracedExpression?(
    node: Ballerina.BracedExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBreakKeyword?(
    node: Ballerina.BreakKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitBreakKeyword?(
    node: Ballerina.BreakKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitBreakStatement?(
    node: Ballerina.BreakStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitBreakStatement?(
    node: Ballerina.BreakStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitByteArrayLiteral?(
    node: Ballerina.ByteArrayLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitByteArrayLiteral?(
    node: Ballerina.ByteArrayLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitByteKeyword?(
    node: Ballerina.ByteKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitByteKeyword?(
    node: Ballerina.ByteKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitByteTypeDesc?(
    node: Ballerina.ByteTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitByteTypeDesc?(
    node: Ballerina.ByteTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCallStatement?(
    node: Ballerina.CallStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitCallStatement?(
    node: Ballerina.CallStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCaptureBindingPattern?(
    node: Ballerina.CaptureBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitCaptureBindingPattern?(
    node: Ballerina.CaptureBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCheckAction?(
    node: Ballerina.CheckAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitCheckAction?(
    node: Ballerina.CheckAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCheckExpression?(
    node: Ballerina.CheckExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitCheckExpression?(
    node: Ballerina.CheckExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCheckKeyword?(
    node: Ballerina.CheckKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitCheckKeyword?(
    node: Ballerina.CheckKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCheckpanicKeyword?(
    node: Ballerina.CheckpanicKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitCheckpanicKeyword?(
    node: Ballerina.CheckpanicKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitClassDefinition?(
    node: Ballerina.ClassDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitClassDefinition?(
    node: Ballerina.ClassDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitClassKeyword?(
    node: Ballerina.ClassKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitClassKeyword?(
    node: Ballerina.ClassKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitClientKeyword?(
    node: Ballerina.ClientKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitClientKeyword?(
    node: Ballerina.ClientKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseBracePipeToken?(
    node: Ballerina.CloseBracePipeToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseBracePipeToken?(
    node: Ballerina.CloseBracePipeToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseBraceToken?(
    node: Ballerina.CloseBraceToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseBraceToken?(
    node: Ballerina.CloseBraceToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseBracketToken?(
    node: Ballerina.CloseBracketToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseBracketToken?(
    node: Ballerina.CloseBracketToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCloseParenToken?(
    node: Ballerina.CloseParenToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCloseParenToken?(
    node: Ballerina.CloseParenToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitColonToken?(
    node: Ballerina.ColonToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitColonToken?(
    node: Ballerina.ColonToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCommaToken?(
    node: Ballerina.CommaToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitCommaToken?(
    node: Ballerina.CommaToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCommitAction?(
    node: Ballerina.CommitAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitCommitAction?(
    node: Ballerina.CommitAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCommitKeyword?(
    node: Ballerina.CommitKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitCommitKeyword?(
    node: Ballerina.CommitKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitCompoundAssignmentStatement?(
    node: Ballerina.CompoundAssignmentStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitCompoundAssignmentStatement?(
    node: Ballerina.CompoundAssignmentStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitComputedNameField?(
    node: Ballerina.ComputedNameField,
    parent?: Ballerina.STNode
  ): void;
  endVisitComputedNameField?(
    node: Ballerina.ComputedNameField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitConditionalExpression?(
    node: Ballerina.ConditionalExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitConditionalExpression?(
    node: Ballerina.ConditionalExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitConfigurableKeyword?(
    node: Ballerina.ConfigurableKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitConfigurableKeyword?(
    node: Ballerina.ConfigurableKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitConstDeclaration?(
    node: Ballerina.ConstDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitConstDeclaration?(
    node: Ballerina.ConstDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitConstKeyword?(
    node: Ballerina.ConstKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitConstKeyword?(
    node: Ballerina.ConstKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitContinueKeyword?(
    node: Ballerina.ContinueKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitContinueKeyword?(
    node: Ballerina.ContinueKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitContinueStatement?(
    node: Ballerina.ContinueStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitContinueStatement?(
    node: Ballerina.ContinueStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDecimalFloatingPointLiteralToken?(
    node: Ballerina.DecimalFloatingPointLiteralToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDecimalFloatingPointLiteralToken?(
    node: Ballerina.DecimalFloatingPointLiteralToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDecimalIntegerLiteralToken?(
    node: Ballerina.DecimalIntegerLiteralToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDecimalIntegerLiteralToken?(
    node: Ballerina.DecimalIntegerLiteralToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDecimalKeyword?(
    node: Ballerina.DecimalKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitDecimalKeyword?(
    node: Ballerina.DecimalKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDecimalTypeDesc?(
    node: Ballerina.DecimalTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitDecimalTypeDesc?(
    node: Ballerina.DecimalTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDefaultableParam?(
    node: Ballerina.DefaultableParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitDefaultableParam?(
    node: Ballerina.DefaultableParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDeprecationLiteral?(
    node: Ballerina.DeprecationLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitDeprecationLiteral?(
    node: Ballerina.DeprecationLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDoKeyword?(
    node: Ballerina.DoKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoKeyword?(
    node: Ballerina.DoKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDoStatement?(
    node: Ballerina.DoStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoStatement?(
    node: Ballerina.DoStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDocumentationDescription?(
    node: Ballerina.DocumentationDescription,
    parent?: Ballerina.STNode
  ): void;
  endVisitDocumentationDescription?(
    node: Ballerina.DocumentationDescription,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDocumentationReference?(
    node: Ballerina.DocumentationReference,
    parent?: Ballerina.STNode
  ): void;
  endVisitDocumentationReference?(
    node: Ballerina.DocumentationReference,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDotToken?(
    node: Ballerina.DotToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDotToken?(node: Ballerina.DotToken, parent?: Ballerina.STNode): void;

  beginVisitDoubleDotLtToken?(
    node: Ballerina.DoubleDotLtToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoubleDotLtToken?(
    node: Ballerina.DoubleDotLtToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDoubleEqualToken?(
    node: Ballerina.DoubleEqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoubleEqualToken?(
    node: Ballerina.DoubleEqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDoubleGtToken?(
    node: Ballerina.DoubleGtToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoubleGtToken?(
    node: Ballerina.DoubleGtToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDoubleLtToken?(
    node: Ballerina.DoubleLtToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoubleLtToken?(
    node: Ballerina.DoubleLtToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitDoubleQuoteToken?(
    node: Ballerina.DoubleQuoteToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitDoubleQuoteToken?(
    node: Ballerina.DoubleQuoteToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitEllipsisToken?(
    node: Ballerina.EllipsisToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitEllipsisToken?(
    node: Ballerina.EllipsisToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitElseBlock?(
    node: Ballerina.ElseBlock,
    parent?: Ballerina.STNode
  ): void;
  endVisitElseBlock?(
    node: Ballerina.ElseBlock,
    parent?: Ballerina.STNode
  ): void;

  beginVisitElseKeyword?(
    node: Ballerina.ElseKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitElseKeyword?(
    node: Ballerina.ElseKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitElvisToken?(
    node: Ballerina.ElvisToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitElvisToken?(
    node: Ballerina.ElvisToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitEnumDeclaration?(
    node: Ballerina.EnumDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitEnumDeclaration?(
    node: Ballerina.EnumDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitEnumKeyword?(
    node: Ballerina.EnumKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitEnumKeyword?(
    node: Ballerina.EnumKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitEnumMember?(
    node: Ballerina.EnumMember,
    parent?: Ballerina.STNode
  ): void;
  endVisitEnumMember?(
    node: Ballerina.EnumMember,
    parent?: Ballerina.STNode
  ): void;

  beginVisitEofToken?(
    node: Ballerina.EofToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitEofToken?(node: Ballerina.EofToken, parent?: Ballerina.STNode): void;

  beginVisitEqualToken?(
    node: Ballerina.EqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitEqualToken?(
    node: Ballerina.EqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitErrorBindingPattern?(
    node: Ballerina.ErrorBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitErrorBindingPattern?(
    node: Ballerina.ErrorBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitErrorConstructor?(
    node: Ballerina.ErrorConstructor,
    parent?: Ballerina.STNode
  ): void;
  endVisitErrorConstructor?(
    node: Ballerina.ErrorConstructor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitErrorKeyword?(
    node: Ballerina.ErrorKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitErrorKeyword?(
    node: Ballerina.ErrorKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitErrorMatchPattern?(
    node: Ballerina.ErrorMatchPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitErrorMatchPattern?(
    node: Ballerina.ErrorMatchPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitErrorTypeDesc?(
    node: Ballerina.ErrorTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitErrorTypeDesc?(
    node: Ballerina.ErrorTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitErrorTypeParams?(
    node: Ballerina.ErrorTypeParams,
    parent?: Ballerina.STNode
  ): void;
  endVisitErrorTypeParams?(
    node: Ballerina.ErrorTypeParams,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExclamationMarkToken?(
    node: Ballerina.ExclamationMarkToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitExclamationMarkToken?(
    node: Ballerina.ExclamationMarkToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExplicitAnonymousFunctionExpression?(
    node: Ballerina.ExplicitAnonymousFunctionExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitExplicitAnonymousFunctionExpression?(
    node: Ballerina.ExplicitAnonymousFunctionExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExplicitNewExpression?(
    node: Ballerina.ExplicitNewExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitExplicitNewExpression?(
    node: Ballerina.ExplicitNewExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExpressionFunctionBody?(
    node: Ballerina.ExpressionFunctionBody,
    parent?: Ballerina.STNode
  ): void;
  endVisitExpressionFunctionBody?(
    node: Ballerina.ExpressionFunctionBody,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExternalFunctionBody?(
    node: Ballerina.ExternalFunctionBody,
    parent?: Ballerina.STNode
  ): void;
  endVisitExternalFunctionBody?(
    node: Ballerina.ExternalFunctionBody,
    parent?: Ballerina.STNode
  ): void;

  beginVisitExternalKeyword?(
    node: Ballerina.ExternalKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitExternalKeyword?(
    node: Ballerina.ExternalKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFailKeyword?(
    node: Ballerina.FailKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFailKeyword?(
    node: Ballerina.FailKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFailStatement?(
    node: Ballerina.FailStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitFailStatement?(
    node: Ballerina.FailStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFalseKeyword?(
    node: Ballerina.FalseKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFalseKeyword?(
    node: Ballerina.FalseKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFieldAccess?(
    node: Ballerina.FieldAccess,
    parent?: Ballerina.STNode
  ): void;
  endVisitFieldAccess?(
    node: Ballerina.FieldAccess,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFieldMatchPattern?(
    node: Ballerina.FieldMatchPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitFieldMatchPattern?(
    node: Ballerina.FieldMatchPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFinalKeyword?(
    node: Ballerina.FinalKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFinalKeyword?(
    node: Ballerina.FinalKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFloatKeyword?(
    node: Ballerina.FloatKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFloatKeyword?(
    node: Ballerina.FloatKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFloatTypeDesc?(
    node: Ballerina.FloatTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitFloatTypeDesc?(
    node: Ballerina.FloatTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitForeachKeyword?(
    node: Ballerina.ForeachKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitForeachKeyword?(
    node: Ballerina.ForeachKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitForeachStatement?(
    node: Ballerina.ForeachStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitForeachStatement?(
    node: Ballerina.ForeachStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitForkKeyword?(
    node: Ballerina.ForkKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitForkKeyword?(
    node: Ballerina.ForkKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitForkStatement?(
    node: Ballerina.ForkStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitForkStatement?(
    node: Ballerina.ForkStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFromClause?(
    node: Ballerina.FromClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitFromClause?(
    node: Ballerina.FromClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFromKeyword?(
    node: Ballerina.FromKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFromKeyword?(
    node: Ballerina.FromKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionBodyBlock?(
    node: Ballerina.FunctionBodyBlock,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionBodyBlock?(
    node: Ballerina.FunctionBodyBlock,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionCall?(
    node: Ballerina.FunctionCall,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionCall?(
    node: Ballerina.FunctionCall,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionDefinition?(
    node: Ballerina.FunctionDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionDefinition?(
    node: Ballerina.FunctionDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionKeyword?(
    node: Ballerina.FunctionKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionKeyword?(
    node: Ballerina.FunctionKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionSignature?(
    node: Ballerina.FunctionSignature,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionSignature?(
    node: Ballerina.FunctionSignature,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFunctionTypeDesc?(
    node: Ballerina.FunctionTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitFunctionTypeDesc?(
    node: Ballerina.FunctionTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitFutureKeyword?(
    node: Ballerina.FutureKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitFutureKeyword?(
    node: Ballerina.FutureKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitGtEqualToken?(
    node: Ballerina.GtEqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitGtEqualToken?(
    node: Ballerina.GtEqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitGtToken?(node: Ballerina.GtToken, parent?: Ballerina.STNode): void;
  endVisitGtToken?(node: Ballerina.GtToken, parent?: Ballerina.STNode): void;

  beginVisitHandleKeyword?(
    node: Ballerina.HandleKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitHandleKeyword?(
    node: Ballerina.HandleKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitHandleTypeDesc?(
    node: Ballerina.HandleTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitHandleTypeDesc?(
    node: Ballerina.HandleTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitHashToken?(
    node: Ballerina.HashToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitHashToken?(
    node: Ballerina.HashToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIdentifierToken?(
    node: Ballerina.IdentifierToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitIdentifierToken?(
    node: Ballerina.IdentifierToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIfElseStatement?(
    node: Ballerina.IfElseStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitIfElseStatement?(
    node: Ballerina.IfElseStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIfKeyword?(
    node: Ballerina.IfKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitIfKeyword?(
    node: Ballerina.IfKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImplicitAnonymousFunctionExpression?(
    node: Ballerina.ImplicitAnonymousFunctionExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitImplicitAnonymousFunctionExpression?(
    node: Ballerina.ImplicitAnonymousFunctionExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImplicitNewExpression?(
    node: Ballerina.ImplicitNewExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitImplicitNewExpression?(
    node: Ballerina.ImplicitNewExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportDeclaration?(
    node: Ballerina.ImportDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportDeclaration?(
    node: Ballerina.ImportDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportKeyword?(
    node: Ballerina.ImportKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportKeyword?(
    node: Ballerina.ImportKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportOrgName?(
    node: Ballerina.ImportOrgName,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportOrgName?(
    node: Ballerina.ImportOrgName,
    parent?: Ballerina.STNode
  ): void;

  beginVisitImportPrefix?(
    node: Ballerina.ImportPrefix,
    parent?: Ballerina.STNode
  ): void;
  endVisitImportPrefix?(
    node: Ballerina.ImportPrefix,
    parent?: Ballerina.STNode
  ): void;

  beginVisitInKeyword?(
    node: Ballerina.InKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitInKeyword?(
    node: Ballerina.InKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIncludedRecordParam?(
    node: Ballerina.IncludedRecordParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitIncludedRecordParam?(
    node: Ballerina.IncludedRecordParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIndexedExpression?(
    node: Ballerina.IndexedExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitIndexedExpression?(
    node: Ballerina.IndexedExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitInferParamList?(
    node: Ballerina.InferParamList,
    parent?: Ballerina.STNode
  ): void;
  endVisitInferParamList?(
    node: Ballerina.InferParamList,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIntKeyword?(
    node: Ballerina.IntKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitIntKeyword?(
    node: Ballerina.IntKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIntTypeDesc?(
    node: Ballerina.IntTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitIntTypeDesc?(
    node: Ballerina.IntTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitInterpolation?(
    node: Ballerina.Interpolation,
    parent?: Ballerina.STNode
  ): void;
  endVisitInterpolation?(
    node: Ballerina.Interpolation,
    parent?: Ballerina.STNode
  ): void;

  beginVisitInterpolationStartToken?(
    node: Ballerina.InterpolationStartToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitInterpolationStartToken?(
    node: Ballerina.InterpolationStartToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIntersectionTypeDesc?(
    node: Ballerina.IntersectionTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitIntersectionTypeDesc?(
    node: Ballerina.IntersectionTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIsKeyword?(
    node: Ballerina.IsKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitIsKeyword?(
    node: Ballerina.IsKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitIsolatedKeyword?(
    node: Ballerina.IsolatedKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitIsolatedKeyword?(
    node: Ballerina.IsolatedKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitJsonKeyword?(
    node: Ballerina.JsonKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitJsonKeyword?(
    node: Ballerina.JsonKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitJsonTypeDesc?(
    node: Ballerina.JsonTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitJsonTypeDesc?(
    node: Ballerina.JsonTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitKeyKeyword?(
    node: Ballerina.KeyKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitKeyKeyword?(
    node: Ballerina.KeyKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitKeySpecifier?(
    node: Ballerina.KeySpecifier,
    parent?: Ballerina.STNode
  ): void;
  endVisitKeySpecifier?(
    node: Ballerina.KeySpecifier,
    parent?: Ballerina.STNode
  ): void;

  beginVisitKeyTypeConstraint?(
    node: Ballerina.KeyTypeConstraint,
    parent?: Ballerina.STNode
  ): void;
  endVisitKeyTypeConstraint?(
    node: Ballerina.KeyTypeConstraint,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLetClause?(
    node: Ballerina.LetClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitLetClause?(
    node: Ballerina.LetClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLetExpression?(
    node: Ballerina.LetExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitLetExpression?(
    node: Ballerina.LetExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLetKeyword?(
    node: Ballerina.LetKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitLetKeyword?(
    node: Ballerina.LetKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLetVarDecl?(
    node: Ballerina.LetVarDecl,
    parent?: Ballerina.STNode
  ): void;
  endVisitLetVarDecl?(
    node: Ballerina.LetVarDecl,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLimitClause?(
    node: Ballerina.LimitClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitLimitClause?(
    node: Ballerina.LimitClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLimitKeyword?(
    node: Ballerina.LimitKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitLimitKeyword?(
    node: Ballerina.LimitKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListBindingPattern?(
    node: Ballerina.ListBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitListBindingPattern?(
    node: Ballerina.ListBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListConstructor?(
    node: Ballerina.ListConstructor,
    parent?: Ballerina.STNode
  ): void;
  endVisitListConstructor?(
    node: Ballerina.ListConstructor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListMatchPattern?(
    node: Ballerina.ListMatchPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitListMatchPattern?(
    node: Ballerina.ListMatchPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListenerDeclaration?(
    node: Ballerina.ListenerDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitListenerDeclaration?(
    node: Ballerina.ListenerDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitListenerKeyword?(
    node: Ballerina.ListenerKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitListenerKeyword?(
    node: Ballerina.ListenerKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLocalVarDecl?(
    node: Ballerina.LocalVarDecl,
    parent?: Ballerina.STNode
  ): void;
  endVisitLocalVarDecl?(
    node: Ballerina.LocalVarDecl,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLockKeyword?(
    node: Ballerina.LockKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitLockKeyword?(
    node: Ballerina.LockKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLockStatement?(
    node: Ballerina.LockStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitLockStatement?(
    node: Ballerina.LockStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLogicalAndToken?(
    node: Ballerina.LogicalAndToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitLogicalAndToken?(
    node: Ballerina.LogicalAndToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLogicalOrToken?(
    node: Ballerina.LogicalOrToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitLogicalOrToken?(
    node: Ballerina.LogicalOrToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLtEqualToken?(
    node: Ballerina.LtEqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitLtEqualToken?(
    node: Ballerina.LtEqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitLtToken?(node: Ballerina.LtToken, parent?: Ballerina.STNode): void;
  endVisitLtToken?(node: Ballerina.LtToken, parent?: Ballerina.STNode): void;

  beginVisitMapKeyword?(
    node: Ballerina.MapKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitMapKeyword?(
    node: Ballerina.MapKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMappingBindingPattern?(
    node: Ballerina.MappingBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitMappingBindingPattern?(
    node: Ballerina.MappingBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMappingConstructor?(
    node: Ballerina.MappingConstructor,
    parent?: Ballerina.STNode
  ): void;
  endVisitMappingConstructor?(
    node: Ballerina.MappingConstructor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMappingMatchPattern?(
    node: Ballerina.MappingMatchPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitMappingMatchPattern?(
    node: Ballerina.MappingMatchPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMarkdownDeprecationDocumentationLine?(
    node: Ballerina.MarkdownDeprecationDocumentationLine,
    parent?: Ballerina.STNode
  ): void;

  endVisitMarkdownDeprecationDocumentationLine?(
    node: Ballerina.MarkdownDeprecationDocumentationLine,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMarkdownDocumentation?(
    node: Ballerina.MarkdownDocumentation,
    parent?: Ballerina.STNode
  ): void;

  endVisitMarkdownDocumentation?(
    node: Ballerina.MarkdownDocumentation,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMarkdownDocumentationLine?(
    node: Ballerina.MarkdownDocumentationLine,
    parent?: Ballerina.STNode
  ): void;
  endVisitMarkdownDocumentationLine?(
    node: Ballerina.MarkdownDocumentationLine,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMarkdownParameterDocumentationLine?(
    node: Ballerina.MarkdownParameterDocumentationLine,
    parent?: Ballerina.STNode
  ): void;
  endVisitMarkdownParameterDocumentationLine?(
    node: Ballerina.MarkdownParameterDocumentationLine,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMarkdownReferenceDocumentationLine?(
    node: Ballerina.MarkdownReferenceDocumentationLine,
    parent?: Ballerina.STNode
  ): void;
  endVisitMarkdownReferenceDocumentationLine?(
    node: Ballerina.MarkdownReferenceDocumentationLine,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMarkdownReturnParameterDocumentationLine?(
    node: Ballerina.MarkdownReturnParameterDocumentationLine,
    parent?: Ballerina.STNode
  ): void;
  endVisitMarkdownReturnParameterDocumentationLine?(
    node: Ballerina.MarkdownReturnParameterDocumentationLine,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMatchClause?(
    node: Ballerina.MatchClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitMatchClause?(
    node: Ballerina.MatchClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMatchKeyword?(
    node: Ballerina.MatchKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitMatchKeyword?(
    node: Ballerina.MatchKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMatchStatement?(
    node: Ballerina.MatchStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitMatchStatement?(
    node: Ballerina.MatchStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMetadata?(
    node: Ballerina.Metadata,
    parent?: Ballerina.STNode
  ): void;
  endVisitMetadata?(node: Ballerina.Metadata, parent?: Ballerina.STNode): void;

  beginVisitMethodCall?(
    node: Ballerina.MethodCall,
    parent?: Ballerina.STNode
  ): void;
  endVisitMethodCall?(
    node: Ballerina.MethodCall,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMethodDeclaration?(
    node: Ballerina.MethodDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitMethodDeclaration?(
    node: Ballerina.MethodDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitMinusToken?(
    node: Ballerina.MinusToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitMinusToken?(
    node: Ballerina.MinusToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitModulePart?(
    node: Ballerina.ModulePart,
    parent?: Ballerina.STNode
  ): void;
  endVisitModulePart?(
    node: Ballerina.ModulePart,
    parent?: Ballerina.STNode
  ): void;

  beginVisitModuleVarDecl?(
    node: Ballerina.ModuleVarDecl,
    parent?: Ballerina.STNode
  ): void;
  endVisitModuleVarDecl?(
    node: Ballerina.ModuleVarDecl,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNamedArg?(
    node: Ballerina.NamedArg,
    parent?: Ballerina.STNode
  ): void;
  endVisitNamedArg?(node: Ballerina.NamedArg, parent?: Ballerina.STNode): void;

  beginVisitNamedArgBindingPattern?(
    node: Ballerina.NamedArgBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitNamedArgBindingPattern?(
    node: Ballerina.NamedArgBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNamedArgMatchPattern?(
    node: Ballerina.NamedArgMatchPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitNamedArgMatchPattern?(
    node: Ballerina.NamedArgMatchPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNamedWorkerDeclaration?(
    node: Ballerina.NamedWorkerDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitNamedWorkerDeclaration?(
    node: Ballerina.NamedWorkerDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNamedWorkerDeclarator?(
    node: Ballerina.NamedWorkerDeclarator,
    parent?: Ballerina.STNode
  ): void;
  endVisitNamedWorkerDeclarator?(
    node: Ballerina.NamedWorkerDeclarator,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNeverKeyword?(
    node: Ballerina.NeverKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitNeverKeyword?(
    node: Ballerina.NeverKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNeverTypeDesc?(
    node: Ballerina.NeverTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitNeverTypeDesc?(
    node: Ballerina.NeverTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNewKeyword?(
    node: Ballerina.NewKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitNewKeyword?(
    node: Ballerina.NewKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNilLiteral?(
    node: Ballerina.NilLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitNilLiteral?(
    node: Ballerina.NilLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNilTypeDesc?(
    node: Ballerina.NilTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitNilTypeDesc?(
    node: Ballerina.NilTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNotDoubleEqualToken?(
    node: Ballerina.NotDoubleEqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitNotDoubleEqualToken?(
    node: Ballerina.NotDoubleEqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNotEqualToken?(
    node: Ballerina.NotEqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitNotEqualToken?(
    node: Ballerina.NotEqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNullKeyword?(
    node: Ballerina.NullKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitNullKeyword?(
    node: Ballerina.NullKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNullLiteral?(
    node: Ballerina.NullLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitNullLiteral?(
    node: Ballerina.NullLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitNumericLiteral?(
    node: Ballerina.NumericLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitNumericLiteral?(
    node: Ballerina.NumericLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectConstructor?(
    node: Ballerina.ObjectConstructor,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectConstructor?(
    node: Ballerina.ObjectConstructor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectField?(
    node: Ballerina.ObjectField,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectField?(
    node: Ballerina.ObjectField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectKeyword?(
    node: Ballerina.ObjectKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectKeyword?(
    node: Ballerina.ObjectKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectMethodDefinition?(
    node: Ballerina.ObjectMethodDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectMethodDefinition?(
    node: Ballerina.ObjectMethodDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitObjectTypeDesc?(
    node: Ballerina.ObjectTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitObjectTypeDesc?(
    node: Ballerina.ObjectTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOnFailClause?(
    node: Ballerina.OnFailClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitOnFailClause?(
    node: Ballerina.OnFailClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOnKeyword?(
    node: Ballerina.OnKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitOnKeyword?(
    node: Ballerina.OnKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenBracePipeToken?(
    node: Ballerina.OpenBracePipeToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenBracePipeToken?(
    node: Ballerina.OpenBracePipeToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenBraceToken?(
    node: Ballerina.OpenBraceToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenBraceToken?(
    node: Ballerina.OpenBraceToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenBracketToken?(
    node: Ballerina.OpenBracketToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenBracketToken?(
    node: Ballerina.OpenBracketToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOpenParenToken?(
    node: Ballerina.OpenParenToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOpenParenToken?(
    node: Ballerina.OpenParenToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOptionalChainingToken?(
    node: Ballerina.OptionalChainingToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitOptionalChainingToken?(
    node: Ballerina.OptionalChainingToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOptionalFieldAccess?(
    node: Ballerina.OptionalFieldAccess,
    parent?: Ballerina.STNode
  ): void;
  endVisitOptionalFieldAccess?(
    node: Ballerina.OptionalFieldAccess,
    parent?: Ballerina.STNode
  ): void;

  beginVisitOptionalTypeDesc?(
    node: Ballerina.OptionalTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitOptionalTypeDesc?(
    node: Ballerina.OptionalTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPanicKeyword?(
    node: Ballerina.PanicKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitPanicKeyword?(
    node: Ballerina.PanicKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPanicStatement?(
    node: Ballerina.PanicStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitPanicStatement?(
    node: Ballerina.PanicStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitParameterName?(
    node: Ballerina.ParameterName,
    parent?: Ballerina.STNode
  ): void;
  endVisitParameterName?(
    node: Ballerina.ParameterName,
    parent?: Ballerina.STNode
  ): void;

  beginVisitParameterizedTypeDesc?(
    node: Ballerina.ParameterizedTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitParameterizedTypeDesc?(
    node: Ballerina.ParameterizedTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitParenthesisedTypeDesc?(
    node: Ballerina.ParenthesisedTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitParenthesisedTypeDesc?(
    node: Ballerina.ParenthesisedTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitParenthesizedArgList?(
    node: Ballerina.ParenthesizedArgList,
    parent?: Ballerina.STNode
  ): void;
  endVisitParenthesizedArgList?(
    node: Ballerina.ParenthesizedArgList,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPercentToken?(
    node: Ballerina.PercentToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitPercentToken?(
    node: Ballerina.PercentToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPipeToken?(
    node: Ballerina.PipeToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitPipeToken?(
    node: Ballerina.PipeToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPlusToken?(
    node: Ballerina.PlusToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitPlusToken?(
    node: Ballerina.PlusToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPositionalArg?(
    node: Ballerina.PositionalArg,
    parent?: Ballerina.STNode
  ): void;
  endVisitPositionalArg?(
    node: Ballerina.PositionalArg,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPrivateKeyword?(
    node: Ballerina.PrivateKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitPrivateKeyword?(
    node: Ballerina.PrivateKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitPublicKeyword?(
    node: Ballerina.PublicKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitPublicKeyword?(
    node: Ballerina.PublicKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQualifiedNameReference?(
    node: Ballerina.QualifiedNameReference,
    parent?: Ballerina.STNode
  ): void;
  endVisitQualifiedNameReference?(
    node: Ballerina.QualifiedNameReference,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQueryAction?(
    node: Ballerina.QueryAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitQueryAction?(
    node: Ballerina.QueryAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQueryConstructType?(
    node: Ballerina.QueryConstructType,
    parent?: Ballerina.STNode
  ): void;
  endVisitQueryConstructType?(
    node: Ballerina.QueryConstructType,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQueryExpression?(
    node: Ballerina.QueryExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitQueryExpression?(
    node: Ballerina.QueryExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQueryPipeline?(
    node: Ballerina.QueryPipeline,
    parent?: Ballerina.STNode
  ): void;
  endVisitQueryPipeline?(
    node: Ballerina.QueryPipeline,
    parent?: Ballerina.STNode
  ): void;

  beginVisitQuestionMarkToken?(
    node: Ballerina.QuestionMarkToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitQuestionMarkToken?(
    node: Ballerina.QuestionMarkToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRawTemplateExpression?(
    node: Ballerina.RawTemplateExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitRawTemplateExpression?(
    node: Ballerina.RawTemplateExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReadonlyKeyword?(
    node: Ballerina.ReadonlyKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitReadonlyKeyword?(
    node: Ballerina.ReadonlyKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReadonlyTypeDesc?(
    node: Ballerina.ReadonlyTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitReadonlyTypeDesc?(
    node: Ballerina.ReadonlyTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordField?(
    node: Ballerina.RecordField,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordField?(
    node: Ballerina.RecordField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordFieldWithDefaultValue?(
    node: Ballerina.RecordFieldWithDefaultValue,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordFieldWithDefaultValue?(
    node: Ballerina.RecordFieldWithDefaultValue,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordKeyword?(
    node: Ballerina.RecordKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordKeyword?(
    node: Ballerina.RecordKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordRestType?(
    node: Ballerina.RecordRestType,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordRestType?(
    node: Ballerina.RecordRestType,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRecordTypeDesc?(
    node: Ballerina.RecordTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitRecordTypeDesc?(
    node: Ballerina.RecordTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRemoteKeyword?(
    node: Ballerina.RemoteKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitRemoteKeyword?(
    node: Ballerina.RemoteKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRemoteMethodCallAction?(
    node: Ballerina.RemoteMethodCallAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitRemoteMethodCallAction?(
    node: Ballerina.RemoteMethodCallAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRequiredExpression?(
    node: Ballerina.RequiredExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitRequiredExpression?(
    node: Ballerina.RequiredExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRequiredParam?(
    node: Ballerina.RequiredParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitRequiredParam?(
    node: Ballerina.RequiredParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitResourceAccessorDefinition?(
    node: Ballerina.ResourceAccessorDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitResourceAccessorDefinition?(
    node: Ballerina.ResourceAccessorDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitResourceKeyword?(
    node: Ballerina.ResourceKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitResourceKeyword?(
    node: Ballerina.ResourceKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRestArg?(node: Ballerina.RestArg, parent?: Ballerina.STNode): void;
  endVisitRestArg?(node: Ballerina.RestArg, parent?: Ballerina.STNode): void;

  beginVisitRestBindingPattern?(
    node: Ballerina.RestBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitRestBindingPattern?(
    node: Ballerina.RestBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRestMatchPattern?(
    node: Ballerina.RestMatchPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitRestMatchPattern?(
    node: Ballerina.RestMatchPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRestParam?(
    node: Ballerina.RestParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitRestParam?(
    node: Ballerina.RestParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnKeyword?(
    node: Ballerina.ReturnKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnKeyword?(
    node: Ballerina.ReturnKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnStatement?(
    node: Ballerina.ReturnStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnStatement?(
    node: Ballerina.ReturnStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnTypeDescriptor?(
    node: Ballerina.ReturnTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnTypeDescriptor?(
    node: Ballerina.ReturnTypeDescriptor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitReturnsKeyword?(
    node: Ballerina.ReturnsKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitReturnsKeyword?(
    node: Ballerina.ReturnsKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRightArrowToken?(
    node: Ballerina.RightArrowToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitRightArrowToken?(
    node: Ballerina.RightArrowToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRightDoubleArrowToken?(
    node: Ballerina.RightDoubleArrowToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitRightDoubleArrowToken?(
    node: Ballerina.RightDoubleArrowToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRollbackKeyword?(
    node: Ballerina.RollbackKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitRollbackKeyword?(
    node: Ballerina.RollbackKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitRollbackStatement?(
    node: Ballerina.RollbackStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitRollbackStatement?(
    node: Ballerina.RollbackStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSelectClause?(
    node: Ballerina.SelectClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitSelectClause?(
    node: Ballerina.SelectClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSelectKeyword?(
    node: Ballerina.SelectKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitSelectKeyword?(
    node: Ballerina.SelectKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSemicolonToken?(
    node: Ballerina.SemicolonToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitSemicolonToken?(
    node: Ballerina.SemicolonToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceBody?(
    node: Ballerina.ServiceBody,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceBody?(
    node: Ballerina.ServiceBody,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceConstructorExpression?(
    node: Ballerina.ServiceConstructorExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceConstructorExpression?(
    node: Ballerina.ServiceConstructorExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceDeclaration?(
    node: Ballerina.ServiceDeclaration,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceDeclaration?(
    node: Ballerina.ServiceDeclaration,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceKeyword?(
    node: Ballerina.ServiceKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceKeyword?(
    node: Ballerina.ServiceKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitServiceTypeDesc?(
    node: Ballerina.ServiceTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitServiceTypeDesc?(
    node: Ballerina.ServiceTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSimpleNameReference?(
    node: Ballerina.SimpleNameReference,
    parent?: Ballerina.STNode
  ): void;
  endVisitSimpleNameReference?(
    node: Ballerina.SimpleNameReference,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSlashLtToken?(
    node: Ballerina.SlashLtToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitSlashLtToken?(
    node: Ballerina.SlashLtToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSlashToken?(
    node: Ballerina.SlashToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitSlashToken?(
    node: Ballerina.SlashToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSpecificField?(
    node: Ballerina.SpecificField,
    parent?: Ballerina.STNode
  ): void;
  endVisitSpecificField?(
    node: Ballerina.SpecificField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitSpreadField?(
    node: Ballerina.SpreadField,
    parent?: Ballerina.STNode
  ): void;
  endVisitSpreadField?(
    node: Ballerina.SpreadField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStartAction?(
    node: Ballerina.StartAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitStartAction?(
    node: Ballerina.StartAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStartKeyword?(
    node: Ballerina.StartKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitStartKeyword?(
    node: Ballerina.StartKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStreamKeyword?(
    node: Ballerina.StreamKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitStreamKeyword?(
    node: Ballerina.StreamKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStreamTypeDesc?(
    node: Ballerina.StreamTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitStreamTypeDesc?(
    node: Ballerina.StreamTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStreamTypeParams?(
    node: Ballerina.StreamTypeParams,
    parent?: Ballerina.STNode
  ): void;
  endVisitStreamTypeParams?(
    node: Ballerina.StreamTypeParams,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStringKeyword?(
    node: Ballerina.StringKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitStringKeyword?(
    node: Ballerina.StringKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStringLiteral?(
    node: Ballerina.StringLiteral,
    parent?: Ballerina.STNode
  ): void;
  endVisitStringLiteral?(
    node: Ballerina.StringLiteral,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStringLiteralToken?(
    node: Ballerina.StringLiteralToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitStringLiteralToken?(
    node: Ballerina.StringLiteralToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStringTemplateExpression?(
    node: Ballerina.StringTemplateExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitStringTemplateExpression?(
    node: Ballerina.StringTemplateExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitStringTypeDesc?(
    node: Ballerina.StringTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitStringTypeDesc?(
    node: Ballerina.StringTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTableConstructor?(
    node: Ballerina.TableConstructor,
    parent?: Ballerina.STNode
  ): void;
  endVisitTableConstructor?(
    node: Ballerina.TableConstructor,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTableKeyword?(
    node: Ballerina.TableKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitTableKeyword?(
    node: Ballerina.TableKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTableTypeDesc?(
    node: Ballerina.TableTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitTableTypeDesc?(
    node: Ballerina.TableTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTemplateString?(
    node: Ballerina.TemplateString,
    parent?: Ballerina.STNode
  ): void;
  endVisitTemplateString?(
    node: Ballerina.TemplateString,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTransactionKeyword?(
    node: Ballerina.TransactionKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitTransactionKeyword?(
    node: Ballerina.TransactionKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTransactionStatement?(
    node: Ballerina.TransactionStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitTransactionStatement?(
    node: Ballerina.TransactionStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTransactionalKeyword?(
    node: Ballerina.TransactionalKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitTransactionalKeyword?(
    node: Ballerina.TransactionalKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTrippleEqualToken?(
    node: Ballerina.TrippleEqualToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitTrippleEqualToken?(
    node: Ballerina.TrippleEqualToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTrippleGtToken?(
    node: Ballerina.TrippleGtToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitTrippleGtToken?(
    node: Ballerina.TrippleGtToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTrueKeyword?(
    node: Ballerina.TrueKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitTrueKeyword?(
    node: Ballerina.TrueKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTupleTypeDesc?(
    node: Ballerina.TupleTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitTupleTypeDesc?(
    node: Ballerina.TupleTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeCastExpression?(
    node: Ballerina.TypeCastExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeCastExpression?(
    node: Ballerina.TypeCastExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeCastParam?(
    node: Ballerina.TypeCastParam,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeCastParam?(
    node: Ballerina.TypeCastParam,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeDefinition?(
    node: Ballerina.TypeDefinition,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeDefinition?(
    node: Ballerina.TypeDefinition,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeDocReferenceToken?(
    node: Ballerina.TypeDocReferenceToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeDocReferenceToken?(
    node: Ballerina.TypeDocReferenceToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeKeyword?(
    node: Ballerina.TypeKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeKeyword?(
    node: Ballerina.TypeKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeParameter?(
    node: Ballerina.TypeParameter,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeParameter?(
    node: Ballerina.TypeParameter,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeReference?(
    node: Ballerina.TypeReference,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeReference?(
    node: Ballerina.TypeReference,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypeTestExpression?(
    node: Ballerina.TypeTestExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypeTestExpression?(
    node: Ballerina.TypeTestExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitTypedBindingPattern?(
    node: Ballerina.TypedBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitTypedBindingPattern?(
    node: Ballerina.TypedBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitUnaryExpression?(
    node: Ballerina.UnaryExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitUnaryExpression?(
    node: Ballerina.UnaryExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitUnionTypeDesc?(
    node: Ballerina.UnionTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitUnionTypeDesc?(
    node: Ballerina.UnionTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitVarKeyword?(
    node: Ballerina.VarKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitVarKeyword?(
    node: Ballerina.VarKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitVarTypeDesc?(
    node: Ballerina.VarTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitVarTypeDesc?(
    node: Ballerina.VarTypeDesc,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWaitAction?(
    node: Ballerina.WaitAction,
    parent?: Ballerina.STNode
  ): void;
  endVisitWaitAction?(
    node: Ballerina.WaitAction,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWaitField?(
    node: Ballerina.WaitField,
    parent?: Ballerina.STNode
  ): void;
  endVisitWaitField?(
    node: Ballerina.WaitField,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWaitFieldsList?(
    node: Ballerina.WaitFieldsList,
    parent?: Ballerina.STNode
  ): void;
  endVisitWaitFieldsList?(
    node: Ballerina.WaitFieldsList,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWaitKeyword?(
    node: Ballerina.WaitKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitWaitKeyword?(
    node: Ballerina.WaitKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWhereClause?(
    node: Ballerina.WhereClause,
    parent?: Ballerina.STNode
  ): void;
  endVisitWhereClause?(
    node: Ballerina.WhereClause,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWhereKeyword?(
    node: Ballerina.WhereKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitWhereKeyword?(
    node: Ballerina.WhereKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWhileKeyword?(
    node: Ballerina.WhileKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitWhileKeyword?(
    node: Ballerina.WhileKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWhileStatement?(
    node: Ballerina.WhileStatement,
    parent?: Ballerina.STNode
  ): void;
  endVisitWhileStatement?(
    node: Ballerina.WhileStatement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWildcardBindingPattern?(
    node: Ballerina.WildcardBindingPattern,
    parent?: Ballerina.STNode
  ): void;
  endVisitWildcardBindingPattern?(
    node: Ballerina.WildcardBindingPattern,
    parent?: Ballerina.STNode
  ): void;

  beginVisitWorkerKeyword?(
    node: Ballerina.WorkerKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitWorkerKeyword?(
    node: Ballerina.WorkerKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlAttribute?(
    node: Ballerina.XmlAttribute,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlAttribute?(
    node: Ballerina.XmlAttribute,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlAttributeValue?(
    node: Ballerina.XmlAttributeValue,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlAttributeValue?(
    node: Ballerina.XmlAttributeValue,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlComment?(
    node: Ballerina.XmlComment,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlComment?(
    node: Ballerina.XmlComment,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlCommentEndToken?(
    node: Ballerina.XmlCommentEndToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlCommentEndToken?(
    node: Ballerina.XmlCommentEndToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlCommentStartToken?(
    node: Ballerina.XmlCommentStartToken,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlCommentStartToken?(
    node: Ballerina.XmlCommentStartToken,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlElement?(
    node: Ballerina.XmlElement,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlElement?(
    node: Ballerina.XmlElement,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlElementEndTag?(
    node: Ballerina.XmlElementEndTag,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlElementEndTag?(
    node: Ballerina.XmlElementEndTag,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlElementStartTag?(
    node: Ballerina.XmlElementStartTag,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlElementStartTag?(
    node: Ballerina.XmlElementStartTag,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlKeyword?(
    node: Ballerina.XmlKeyword,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlKeyword?(
    node: Ballerina.XmlKeyword,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlNamePatternChain?(
    node: Ballerina.XmlNamePatternChain,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlNamePatternChain?(
    node: Ballerina.XmlNamePatternChain,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlQualifiedName?(
    node: Ballerina.XmlQualifiedName,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlQualifiedName?(
    node: Ballerina.XmlQualifiedName,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlSimpleName?(
    node: Ballerina.XmlSimpleName,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlSimpleName?(
    node: Ballerina.XmlSimpleName,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlStepExpression?(
    node: Ballerina.XmlStepExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlStepExpression?(
    node: Ballerina.XmlStepExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlTemplateExpression?(
    node: Ballerina.XmlTemplateExpression,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlTemplateExpression?(
    node: Ballerina.XmlTemplateExpression,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlText?(node: Ballerina.XmlText, parent?: Ballerina.STNode): void;
  endVisitXmlText?(node: Ballerina.XmlText, parent?: Ballerina.STNode): void;

  beginVisitXmlTextContent?(
    node: Ballerina.XmlTextContent,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlTextContent?(
    node: Ballerina.XmlTextContent,
    parent?: Ballerina.STNode
  ): void;

  beginVisitXmlTypeDesc?(
    node: Ballerina.XmlTypeDesc,
    parent?: Ballerina.STNode
  ): void;
  endVisitXmlTypeDesc?(
    node: Ballerina.XmlTypeDesc,
    parent?: Ballerina.STNode
  ): void;
}