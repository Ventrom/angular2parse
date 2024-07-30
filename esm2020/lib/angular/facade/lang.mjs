/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
export function isPresent(obj) {
    return obj != null;
}
export function isBlank(obj) {
    return obj == null;
}
const STRING_MAP_PROTO = Object.getPrototypeOf({});
export function isStrictStringMap(obj) {
    return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
export function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return `${token.overriddenName}`;
    }
    if (token.name) {
        return `${token.name}`;
    }
    const res = token.toString();
    const newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
export class NumberWrapper {
    static parseIntAutoRadix(text) {
        const result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    }
    static isNumeric(value) { return !isNaN(value - parseFloat(value)); }
}
// JS has NaN !== NaN
export function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
export function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
export function print(obj) {
    // tslint:disable-next-line:no-console
    console.log(obj);
}
export function warn(obj) {
    console.warn(obj);
}
export function setValueOnPath(global, path, value) {
    const parts = path.split('.');
    let obj = global;
    while (parts.length > 1) {
        const name = parts.shift();
        if (obj.hasOwnProperty(name) && obj[name] != null) {
            obj = obj[name];
        }
        else {
            obj = obj[name] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
export function isPrimitive(obj) {
    return !isJsObject(obj);
}
export function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXIycGFyc2Uvc3JjL2xpYi9hbmd1bGFyL2ZhY2FkZS9sYW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQXlCSCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBUztJQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQztBQUN2QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFRO0lBQzlCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFRO0lBQzVCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxHQUFRO0lBQ3RDLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztBQUN0RyxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVO0lBQ2hDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2YsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0tBQ3JCO0lBRUQsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO1FBQ3RCLE9BQU8sR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDcEM7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDWixPQUFPLEdBQUcsS0FBSyxD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QTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBCcm93c2VyTm9kZUdsb2JhbCB7XG4gICAgT2JqZWN0OiB0eXBlb2YgT2JqZWN0O1xuICAgIEFycmF5OiB0eXBlb2YgQXJyYXk7XG4gICAgTWFwOiB0eXBlb2YgTWFwO1xuICAgIFNldDogdHlwZW9mIFNldDtcbiAgICBEYXRlOiBEYXRlQ29uc3RydWN0b3I7XG4gICAgUmVnRXhwOiBSZWdFeHBDb25zdHJ1Y3RvcjtcbiAgICBKU09OOiB0eXBlb2YgSlNPTjtcbiAgICBNYXRoOiBhbnk7ICAvLyB0eXBlb2YgTWF0aDtcbiAgICBhc3NlcnQoY29uZGl0aW9uOiBhbnkpOiB2b2lkO1xuICAgIFJlZmxlY3Q6IGFueTtcbiAgICBnZXRBbmd1bGFyVGVzdGFiaWxpdHk6IEZ1bmN0aW9uO1xuICAgIGdldEFsbEFuZ3VsYXJUZXN0YWJpbGl0aWVzOiBGdW5jdGlvbjtcbiAgICBnZXRBbGxBbmd1bGFyUm9vdEVsZW1lbnRzOiBGdW5jdGlvbjtcbiAgICBmcmFtZXdvcmtTdGFiaWxpemVyczogQXJyYXk8RnVuY3Rpb24+O1xuICAgIHNldFRpbWVvdXQ6IEZ1bmN0aW9uO1xuICAgIGNsZWFyVGltZW91dDogRnVuY3Rpb247XG4gICAgc2V0SW50ZXJ2YWw6IEZ1bmN0aW9uO1xuICAgIGNsZWFySW50ZXJ2YWw6IEZ1bmN0aW9uO1xuICAgIGVuY29kZVVSSTogRnVuY3Rpb247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVOYW1lRm9yRGVidWdnaW5nKHR5cGU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVbJ25hbWUnXSB8fCB0eXBlb2YgdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvYmogIT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqID09IG51bGw7XG59XG5cbmNvbnN0IFNUUklOR19NQVBfUFJPVE8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaWN0U3RyaW5nTWFwKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gU1RSSU5HX01BUF9QUk9UTztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh0b2tlbjogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgaWYgKHRva2VuID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnICsgdG9rZW47XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLm92ZXJyaWRkZW5OYW1lKSB7XG4gICAgICAgIHJldHVybiBgJHt0b2tlbi5vdmVycmlkZGVuTmFtZX1gO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi5uYW1lKSB7XG4gICAgICAgIHJldHVybiBgJHt0b2tlbi5uYW1lfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gdG9rZW4udG9TdHJpbmcoKTtcbiAgICBjb25zdCBuZXdMaW5lSW5kZXggPSByZXMuaW5kZXhPZignXFxuJyk7XG4gICAgcmV0dXJuIG5ld0xpbmVJbmRleCA9PT0gLTEgPyByZXMgOiByZXMuc3Vic3RyaW5nKDAsIG5ld0xpbmVJbmRleCk7XG59XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJXcmFwcGVyIHtcbiAgICBzdGF0aWMgcGFyc2VJbnRBdXRvUmFkaXgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0KTtcbiAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnRlZ2VyIGxpdGVyYWwgd2hlbiBwYXJzaW5nICcgKyB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBpc051bWVyaWModmFsdWU6IGFueSk6IGJvb2xlYW4geyByZXR1cm4gIWlzTmFOKHZhbHVlIC0gcGFyc2VGbG9hdCh2YWx1ZSkpOyB9XG59XG5cbi8vIEpTIGhhcyBOYU4gIT09IE5hTlxuZXhwb3J0IGZ1bmN0aW9uIGxvb3NlSWRlbnRpY2FsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGEgPT09IGIgfHwgdHlwZW9mIGEgPT09ICdudW1iZXInICYmIHR5cGVvZiBiID09PSAnbnVtYmVyJyAmJiBpc05hTihhKSAmJiBpc05hTihiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNPYmplY3QobzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG8gIT09IG51bGwgJiYgKHR5cGVvZiBvID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvID09PSAnb2JqZWN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludChvYmo6IEVycm9yIHwgT2JqZWN0KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybihvYmo6IEVycm9yIHwgT2JqZWN0KSB7XG4gICAgY29uc29sZS53YXJuKG9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWYWx1ZU9uUGF0aChnbG9iYWw6IGFueSwgcGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgbGV0IG9iajogYW55ID0gZ2xvYmFsO1xuICAgIHdoaWxlIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpICYmIG9ialtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbbmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIG9iaiA9IHt9O1xuICAgIH1cbiAgICBvYmpbcGFydHMuc2hpZnQoKV0gPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc0pzT2JqZWN0KG9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59Il19