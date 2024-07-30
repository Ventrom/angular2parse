/// <reference path="parse-visitor-compiler.ngtypecheck.d.ts" />
import { AST, RecursiveAstVisitor, PropertyRead, MethodCall, KeyedRead, ImplicitReceiver, LiteralPrimitive, Binary, Chain, Conditional, BindingPipe, FunctionCall, Interpolation, KeyedWrite, LiteralArray, LiteralMap, PrefixNot, PropertyWrite, SafePropertyRead, SafeMethodCall, Quote } from '../angular';
export declare class ParseVisitorCompiler extends RecursiveAstVisitor {
    visitBinary(ast: Binary): any;
    visitChain(ast: Chain): any;
    visitConditional(ast: Conditional): any;
    visitPipe(ast: BindingPipe): any;
    visitFunctionCall(ast: FunctionCall): any;
    visitImplicitReceiver(ast: ImplicitReceiver): any;
    visitInterpolation(ast: Interpolation): any;
    visitKeyedRead(ast: KeyedRead): any;
    visitKeyedWrite(ast: KeyedWrite): any;
    visitLiteralArray(ast: LiteralArray): any;
    visitLiteralMap(ast: LiteralMap): any;
    visitLiteralPrimitive(ast: LiteralPrimitive): any;
    visitMethodCall(ast: MethodCall): any;
    visitPrefixNot(ast: PrefixNot): any;
    visitPropertyRead(ast: PropertyRead): any;
    visitPropertyWrite(ast: PropertyWrite): any;
    visitSafePropertyRead(ast: SafePropertyRead): any;
    visitSafeMethodCall(ast: SafeMethodCall): any;
    visitAll(asts: AST[]): any;
    visitQuote(ast: Quote): any;
}
