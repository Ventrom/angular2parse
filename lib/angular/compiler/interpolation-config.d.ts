/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference path="interpolation-config.ngtypecheck.d.ts" />
export declare class InterpolationConfig {
    start: string;
    end: string;
    static fromArray(markers: [string, string]): InterpolationConfig;
    constructor(start: string, end: string);
}
export declare const DEFAULT_INTERPOLATION_CONFIG: InterpolationConfig;
