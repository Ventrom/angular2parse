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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Parse, deps: [{ token: PIPES_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Parse, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: Parse, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PIPES_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMnBhcnNlL3NyYy9saWIvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBaUIsTUFBTSxXQUFXLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sWUFBWSxDQUFDOztBQUV4RSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7QUFROUQsTUFBTSxPQUFPLEtBQUs7SUFNaEI7O09BRUc7SUFFSCxZQUE4QyxZQUE2QjtRQVRuRSxZQUFPLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLGdCQUFXLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdkQsZUFBVSxHQUEwQixJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUNoRSxlQUFVLEdBQTBCLElBQUksR0FBRyxFQUFvQixDQUFDO1FBT3RFLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QyxZQUFZO2lCQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkgsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsVUFBa0I7UUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUUzQyxJQUFJLEdBQUcsR0FBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLE9BQVk7WUFDL0MsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUzRCxJQUFJLEdBQUcsR0FBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsT0FBWTtZQUMvQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzhHQWhFVSxLQUFLLGtCQVVnQixZQUFZO2tIQVZqQyxLQUFLLGNBRE8sTUFBTTs7MkZBQ2xCLEtBQUs7a0JBRGpCLFVBQVU7bUJBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzswQkFXakIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcnNlciwgTGV4ZXIsIEFTVFdpdGhTb3VyY2UgfSBmcm9tICcuL2FuZ3VsYXInO1xuaW1wb3J0IHsgUGFyc2VWaXNpdG9yUmVzb2x2ZXIsIFBhcnNlVmlzaXRvckNvbXBpbGVyIH0gZnJvbSAnLi92aXNpdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBQSVBFU19DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1BpcGVzQ29uZmlnJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZXNDb25maWcge1xuICBwaXBlTmFtZTogc3RyaW5nO1xuICBwaXBlSW5zdGFuY2U6IGFueTtcbn1cblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgUGFyc2Uge1xuICBwcml2YXRlIF9wYXJzZXI6IFBhcnNlciA9IG5ldyBQYXJzZXIobmV3IExleGVyKCkpO1xuICBwcml2YXRlIF9waXBlc0NhY2hlOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgcHJpdmF0ZSBfZXZhbENhY2hlOiBNYXA8c3RyaW5nLCBGdW5jdGlvbj4gPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb24+KCk7XG4gIHByaXZhdGUgX2NhbGNDYWNoZTogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGRlcGVuZGVuY3kgaW5qZWN0IHRoZSBBbmd1bGFyIDIgcGFyc2VyLlxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KFBJUEVTX0NPTkZJRykgcGlwZXNDb25maWdzOiBQaXBlc0NvbmZpZ1tdW10pIHtcbiAgICBpZiAocGlwZXNDb25maWdzICYmIHBpcGVzQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIHBpcGVzQ29uZmlnc1xuICAgICAgICAuZmlsdGVyKHBpcGVzID0+IHBpcGVzICYmIHBpcGVzLmxlbmd0aClcbiAgICAgICAgLmZvckVhY2gocGlwZXMgPT4gcGlwZXMuZm9yRWFjaCgocGlwZURhdGEpID0+IHRoaXMuX3BpcGVzQ2FjaGUuc2V0KHBpcGVEYXRhLnBpcGVOYW1lLCBwaXBlRGF0YS5waXBlSW5zdGFuY2UpKSk7XG4gICAgfVxuICB9XG5cbiAgZXZhbChleHByZXNzaW9uOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgaWYgKHRoaXMuX2V2YWxDYWNoZS5oYXMoZXhwcmVzc2lvbikpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ldmFsQ2FjaGUuZ2V0KGV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgUGFyc2VWaXNpdG9yQ29tcGlsZXIoKTtcblxuICAgIGxldCBhc3Q6IEFTVFdpdGhTb3VyY2UgPSB0aGlzLl9wYXJzZXIucGFyc2VJbnRlcnBvbGF0aW9uKGV4cHJlc3Npb24sICdQYXJzZScpO1xuXG4gICAgaWYgKCFhc3QpIHtcbiAgICAgIGFzdCA9IHRoaXMuX3BhcnNlci5wYXJzZUJpbmRpbmcoZXhwcmVzc2lvbiwgJ1BhcnNlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZm5Cb2R5ID0gYXN0LnZpc2l0KHZpc2l0b3IpO1xuICAgIGNvbnN0IHBpcGVzQ2FjaGUgPSB0aGlzLl9waXBlc0NhY2hlO1xuICAgIGNvbnN0IGdldEZuID0gbmV3IEZ1bmN0aW9uKCdjb250ZXh0JywgJ3BpcGVzQ2FjaGUnLCBgcmV0dXJuICR7Zm5Cb2R5fTtgKTtcblxuICAgIGNvbnN0IGV2YWxQYXJzZSA9IGZ1bmN0aW9uIGV2YWxQYXJzZShjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIGdldEZuKGNvbnRleHQsIHBpcGVzQ2FjaGUpO1xuICAgIH07XG5cbiAgICB0aGlzLl9ldmFsQ2FjaGUuc2V0KGV4cHJlc3Npb24sIGV2YWxQYXJzZSk7XG5cbiAgICByZXR1cm4gZXZhbFBhcnNlO1xuICB9XG5cbiAgY2FsYyhleHByZXNzaW9uOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgaWYgKHRoaXMuX2NhbGNDYWNoZS5oYXMoZXhwcmVzc2lvbikpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWxjQ2FjaGUuZ2V0KGV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgUGFyc2VWaXNpdG9yUmVzb2x2ZXIodGhpcy5fcGlwZXNDYWNoZSk7XG5cbiAgICBsZXQgYXN0OiBBU1RXaXRoU291cmNlID0gdGhpcy5fcGFyc2VyLnBhcnNlSW50ZXJwb2xhdGlvbihleHByZXNzaW9uLCAnUGFyc2UnKTtcblxuICAgIGlmICghYXN0KSB7XG4gICAgICBhc3QgPSB0aGlzLl9wYXJzZXIucGFyc2VCaW5kaW5nKGV4cHJlc3Npb24sICdQYXJzZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGNQYXJzZSA9IGZ1bmN0aW9uIGNhbGNQYXJzZShjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fY2FsY0NhY2hlLnNldChleHByZXNzaW9uLCBjYWxjUGFyc2UpO1xuXG4gICAgcmV0dXJuIGNhbGNQYXJzZTtcbiAgfVxufVxuIl19