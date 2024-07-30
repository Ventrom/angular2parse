/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertInterpolationSymbols } from './assertions';
export class InterpolationConfig {
    static fromArray(markers) {
        if (!markers) {
            return DEFAULT_INTERPOLATION_CONFIG;
        }
        assertInterpolationSymbols('interpolation', markers);
        return new InterpolationConfig(markers[0], markers[1]);
    }
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    ;
}
export const DEFAULT_INTERPOLATION_CONFIG = new InterpolationConfig('{{', '}}');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwb2xhdGlvbi1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMnBhcnNlL3NyYy9saWIvYW5ndWxhci9jb21waWxlci9pbnRlcnBvbGF0aW9uLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFeEQsTUFBTSxPQUFPLG1CQUFtQjtJQUM1QixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQXlCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNYLE9BQU8sNEJBQTRCLENBQUM7UUFDeEMsQ0FBQztRQUVELDBCQUEwQixDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxZQUFtQixLQUFhLEVBQVMsR0FBVztRQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUFFLENBQUM7SUFBQSxDQUFDO0NBQzNEO0FBRUQsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQ3JDLElBQUksbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Fzc2VydEludGVycG9sYXRpb25TeW1ib2xzfSBmcm9tICcuL2Fzc2VydGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJwb2xhdGlvbkNvbmZpZyB7XG4gICAgc3RhdGljIGZyb21BcnJheShtYXJrZXJzOiBbc3RyaW5nLCBzdHJpbmddKTogSW50ZXJwb2xhdGlvbkNvbmZpZyB7XG4gICAgICAgIGlmICghbWFya2Vycykge1xuICAgICAgICAgICAgcmV0dXJuIERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc7XG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnRJbnRlcnBvbGF0aW9uU3ltYm9scygnaW50ZXJwb2xhdGlvbicsIG1hcmtlcnMpO1xuICAgICAgICByZXR1cm4gbmV3IEludGVycG9sYXRpb25Db25maWcobWFya2Vyc1swXSwgbWFya2Vyc1sxXSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBzdHJpbmcsIHB1YmxpYyBlbmQ6IHN0cmluZyl7fTtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc6IEludGVycG9sYXRpb25Db25maWcgPVxuICAgIG5ldyBJbnRlcnBvbGF0aW9uQ29uZmlnKCd7eycsICd9fScpOyJdfQ==