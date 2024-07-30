/// <reference path="parse.ngtypecheck.d.ts" />
import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare const PIPES_CONFIG: InjectionToken<unknown>;
export interface PipesConfig {
    pipeName: string;
    pipeInstance: any;
}
export declare class Parse {
    private _parser;
    private _pipesCache;
    private _evalCache;
    private _calcCache;
    /**
     * Used to dependency inject the Angular 2 parser.
     */
    constructor(pipesConfigs: PipesConfig[][]);
    eval(expression: string): Function;
    calc(expression: string): Function;
    static ɵfac: i0.ɵɵFactoryDeclaration<Parse, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Parse>;
}
