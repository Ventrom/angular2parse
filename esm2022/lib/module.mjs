import { NgModule } from '@angular/core';
import { PIPES_CONFIG } from './parse';
import * as i0 from "@angular/core";
export class Angular2ParseModule {
    static forRoot(pipesConfigMap) {
        return {
            ngModule: Angular2ParseModule,
            providers: [{ provide: PIPES_CONFIG, multi: true, useValue: pipesConfigMap || [] }]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Angular2ParseModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: Angular2ParseModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Angular2ParseModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Angular2ParseModule, decorators: [{
            type: NgModule
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhcjJwYXJzZS9zcmMvbGliL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQVMsWUFBWSxFQUFlLE1BQU0sU0FBUyxDQUFDOztBQUczRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBNkI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsSUFBSSxFQUFFLEVBQUMsQ0FBQztTQUNsRixDQUFDO0lBQ0osQ0FBQzsrR0FOVSxtQkFBbUI7Z0hBQW5CLG1CQUFtQjtnSEFBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUQvQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcnNlLCBQSVBFU19DT05GSUcsIFBpcGVzQ29uZmlnIH0gZnJvbSAnLi9wYXJzZSc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgQW5ndWxhcjJQYXJzZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHBpcGVzQ29uZmlnTWFwOiBQaXBlc0NvbmZpZ1tdKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXIyUGFyc2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogUElQRVNfQ09ORklHLCBtdWx0aTogdHJ1ZSwgdXNlVmFsdWU6IHBpcGVzQ29uZmlnTWFwIHx8IFtdfV1cbiAgICB9O1xuICB9XG59XG4iXX0=