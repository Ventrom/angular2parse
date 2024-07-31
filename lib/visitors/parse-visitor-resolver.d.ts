import { AST, RecursiveAstVisitor, PropertyRead, MethodCall, KeyedRead, ImplicitReceiver, LiteralPrimitive, Binary, Chain, Conditional, BindingPipe, FunctionCall, Interpolation, KeyedWrite, LiteralArray, LiteralMap, PrefixNot, PropertyWrite, SafePropertyRead, SafeMethodCall, Quote } from '../angular';
export declare class ParseVisitorResolver extends RecursiveAstVisitor {
    private pipes;
    constructor(pipes: Map<string, any>);
    visitBinary(ast: Binary, context: any): any;
    visitChain(ast: Chain, context: any): any;
    visitConditional(ast: Conditional, context: any): any;
    visitPipe(ast: BindingPipe, context: any): any;
    visitFunctionCall(ast: FunctionCall, context: any): any;
    visitImplicitReceiver(ast: ImplicitReceiver, context: any): any;
    visitInterpolation(ast: Interpolation, context: any): any;
    visitKeyedRead(ast: KeyedRead, context: any): any;
    visitKeyedWrite(ast: KeyedWrite, context: any): any;
    visitLiteralArray(ast: LiteralArray, context: any): any;
    visitLiteralMap(ast: LiteralMap, context: any): any;
    visitLiteralPrimitive(ast: LiteralPrimitive, context: any): any;
    visitMethodCall(ast: MethodCall, context: any): any;
    visitPrefixNot(ast: PrefixNot, context: any): any;
    visitPropertyRead(ast: PropertyRead, context: any): any;
    visitPropertyWrite(ast: PropertyWrite, context: any): any;
    visitSafePropertyRead(ast: SafePropertyRead, context: any): any;
    visitSafeMethodCall(ast: SafeMethodCall, context: any): any;
    visitAll(asts: AST[], context: any): any;
    visitQuote(ast: Quote, context: any): any;
}
