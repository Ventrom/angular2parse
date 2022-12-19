import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Parser, Lexer } from './angular';
import { ParseVisitorResolver, ParseVisitorCompiler } from './visitors';
import * as i0 from "@angular/core";
export const PIPES_CONFIG = new InjectionToken('PipesConfig');
export class Parse {
    /**
     * Used to dependency inject the Angular 2 parser.
     */
    constructor(pipesConfigs) {
        this._parser = new Parser(new Lexer());
        this._pipesCache = new Map();
        this._evalCache = new Map();
        this._calcCache = new Map();
        if (pipesConfigs && pipesConfigs.length) {
            pipesConfigs
                .filter(pipes => pipes && pipes.length)
                .forEach(pipes => pipes.forEach((pipeData) => this._pipesCache.set(pipeData.pipeName, pipeData.pipeInstance)));
        }
    }
    eval(expression) {
        if (this._evalCache.has(expression)) {
            return this._evalCache.get(expression);
        }
        const visitor = new ParseVisitorCompiler();
        let ast = this._parser.parseInterpolation(expression, 'Parse');
        if (!ast) {
            ast = this._parser.parseBinding(expression, 'Parse');
        }
        const fnBody = ast.visit(visitor);
        const pipesCache = this._pipesCache;
        const getFn = new Function('context', 'pipesCache', `return ${fnBody};`);
        const evalParse = function evalParse(context) {
            return getFn(context, pipesCache);
        };
        this._evalCache.set(expression, evalParse);
        return evalParse;
    }
    calc(expression) {
        if (this._calcCache.has(expression)) {
            return this._calcCache.get(expression);
        }
        const visitor = new ParseVisitorResolver(this._pipesCache);
        let ast = this._parser.parseInterpolation(expression, 'Parse');
        if (!ast) {
            ast = this._parser.parseBinding(expression, 'Parse');
        }
        const calcParse = function calcParse(context) {
            return ast.visit(visitor, context);
        };
        this._calcCache.set(expression, calcParse);
        return calcParse;
    }
}
Parse.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Parse, deps: [{ token: PIPES_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
Parse.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Parse, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Parse, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PIPES_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMnBhcnNlL3NyYy9saWIvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBaUIsTUFBTSxXQUFXLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sWUFBWSxDQUFDOztBQUV4RSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7QUFROUQsTUFBTSxPQUFPLEtBQUs7SUFNaEI7O09BRUc7SUFFSCxZQUE4QyxZQUE2QjtRQVRuRSxZQUFPLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdkQsZUFBVSxHQUEwQixJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUNoRSxlQUFVLEdBQTBCLElBQUksR0FBRyxFQUFvQixDQUFDO1FBT3RFLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDdkMsWUFBWTtpQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztpQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxVQUFrQjtRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFFM0MsSUFBSSxHQUFHLEdBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO1FBRUQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLE9BQVk7WUFDL0MsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNELElBQUksR0FBRyxHQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN0RDtRQUVELE1BQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLE9BQVk7WUFDL0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFM0MsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7bUdBaEVVLEtBQUssa0JBVWdCLFlBQVk7dUdBVmpDLEtBQUssY0FETyxNQUFNOzRGQUNsQixLQUFLO2tCQURqQixVQUFVO21CQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7MEJBV2pCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJzZXIsIExleGVyLCBBU1RXaXRoU291cmNlIH0gZnJvbSAnLi9hbmd1bGFyJztcbmltcG9ydCB7IFBhcnNlVmlzaXRvclJlc29sdmVyLCBQYXJzZVZpc2l0b3JDb21waWxlciB9IGZyb20gJy4vdmlzaXRvcnMnO1xuXG5leHBvcnQgY29uc3QgUElQRVNfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdQaXBlc0NvbmZpZycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVzQ29uZmlnIHtcbiAgcGlwZU5hbWU6IHN0cmluZztcbiAgcGlwZUluc3RhbmNlOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFBhcnNlIHtcbiAgcHJpdmF0ZSBfcGFyc2VyOiBQYXJzZXIgPSBuZXcgUGFyc2VyKG5ldyBMZXhlcigpKTtcbiAgcHJpdmF0ZSBfcGlwZXNDYWNoZTogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gIHByaXZhdGUgX2V2YWxDYWNoZTogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPigpO1xuICBwcml2YXRlIF9jYWxjQ2FjaGU6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBGdW5jdGlvbj4oKTtcblxuICAvKipcbiAgICogVXNlZCB0byBkZXBlbmRlbmN5IGluamVjdCB0aGUgQW5ndWxhciAyIHBhcnNlci5cbiAgICovXG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChQSVBFU19DT05GSUcpIHBpcGVzQ29uZmlnczogUGlwZXNDb25maWdbXVtdKSB7XG4gICAgaWYgKHBpcGVzQ29uZmlncyAmJiBwaXBlc0NvbmZpZ3MubGVuZ3RoKSB7XG4gICAgICBwaXBlc0NvbmZpZ3NcbiAgICAgICAgLmZpbHRlcihwaXBlcyA9PiBwaXBlcyAmJiBwaXBlcy5sZW5ndGgpXG4gICAgICAgIC5mb3JFYWNoKHBpcGVzID0+IHBpcGVzLmZvckVhY2goKHBpcGVEYXRhKSA9PiB0aGlzLl9waXBlc0NhY2hlLnNldChwaXBlRGF0YS5waXBlTmFtZSwgcGlwZURhdGEucGlwZUluc3RhbmNlKSkpO1xuICAgIH1cbiAgfVxuXG4gIGV2YWwoZXhwcmVzc2lvbjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGlmICh0aGlzLl9ldmFsQ2FjaGUuaGFzKGV4cHJlc3Npb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZXZhbENhY2hlLmdldChleHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFBhcnNlVmlzaXRvckNvbXBpbGVyKCk7XG5cbiAgICBsZXQgYXN0OiBBU1RXaXRoU291cmNlID0gdGhpcy5fcGFyc2VyLnBhcnNlSW50ZXJwb2xhdGlvbihleHByZXNzaW9uLCAnUGFyc2UnKTtcblxuICAgIGlmICghYXN0KSB7XG4gICAgICBhc3QgPSB0aGlzLl9wYXJzZXIucGFyc2VCaW5kaW5nKGV4cHJlc3Npb24sICdQYXJzZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGZuQm9keSA9IGFzdC52aXNpdCh2aXNpdG9yKTtcbiAgICBjb25zdCBwaXBlc0NhY2hlID0gdGhpcy5fcGlwZXNDYWNoZTtcbiAgICBjb25zdCBnZXRGbiA9IG5ldyBGdW5jdGlvbignY29udGV4dCcsICdwaXBlc0NhY2hlJywgYHJldHVybiAke2ZuQm9keX07YCk7XG5cbiAgICBjb25zdCBldmFsUGFyc2UgPSBmdW5jdGlvbiBldmFsUGFyc2UoY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIHJldHVybiBnZXRGbihjb250ZXh0LCBwaXBlc0NhY2hlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZXZhbENhY2hlLnNldChleHByZXNzaW9uLCBldmFsUGFyc2UpO1xuXG4gICAgcmV0dXJuIGV2YWxQYXJzZTtcbiAgfVxuXG4gIGNhbGMoZXhwcmVzc2lvbjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGlmICh0aGlzLl9jYWxjQ2FjaGUuaGFzKGV4cHJlc3Npb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FsY0NhY2hlLmdldChleHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFBhcnNlVmlzaXRvclJlc29sdmVyKHRoaXMuX3BpcGVzQ2FjaGUpO1xuXG4gICAgbGV0IGFzdDogQVNUV2l0aFNvdXJjZSA9IHRoaXMuX3BhcnNlci5wYXJzZUludGVycG9sYXRpb24oZXhwcmVzc2lvbiwgJ1BhcnNlJyk7XG5cbiAgICBpZiAoIWFzdCkge1xuICAgICAgYXN0ID0gdGhpcy5fcGFyc2VyLnBhcnNlQmluZGluZyhleHByZXNzaW9uLCAnUGFyc2UnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjUGFyc2UgPSBmdW5jdGlvbiBjYWxjUGFyc2UoY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIHJldHVybiBhc3QudmlzaXQodmlzaXRvciwgY29udGV4dCk7XG4gICAgfTtcblxuICAgIHRoaXMuX2NhbGNDYWNoZS5zZXQoZXhwcmVzc2lvbiwgY2FsY1BhcnNlKTtcblxuICAgIHJldHVybiBjYWxjUGFyc2U7XG4gIH1cbn1cbiJdfQ==