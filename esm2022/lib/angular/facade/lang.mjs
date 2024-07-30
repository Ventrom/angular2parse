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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXIycGFyc2Uvc3JjL2xpYi9hbmd1bGFyL2ZhY2FkZS9sYW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQXlCSCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBUztJQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQztBQUN2QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFRO0lBQzlCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFRO0lBQzVCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxHQUFRO0lBQ3RDLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztBQUN0RyxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVO0lBQ2hDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDNUIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMs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QyxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFTO0lBQ2xDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyb3dzZXJOb2RlR2xvYmFsIHtcbiAgICBPYmplY3Q6IHR5cGVvZiBPYmplY3Q7XG4gICAgQXJyYXk6IHR5cGVvZiBBcnJheTtcbiAgICBNYXA6IHR5cGVvZiBNYXA7XG4gICAgU2V0OiB0eXBlb2YgU2V0O1xuICAgIERhdGU6IERhdGVDb25zdHJ1Y3RvcjtcbiAgICBSZWdFeHA6IFJlZ0V4cENvbnN0cnVjdG9yO1xuICAgIEpTT046IHR5cGVvZiBKU09OO1xuICAgIE1hdGg6IGFueTsgIC8vIHR5cGVvZiBNYXRoO1xuICAgIGFzc2VydChjb25kaXRpb246IGFueSk6IHZvaWQ7XG4gICAgUmVmbGVjdDogYW55O1xuICAgIGdldEFuZ3VsYXJUZXN0YWJpbGl0eTogRnVuY3Rpb247XG4gICAgZ2V0QWxsQW5ndWxhclRlc3RhYmlsaXRpZXM6IEZ1bmN0aW9uO1xuICAgIGdldEFsbEFuZ3VsYXJSb290RWxlbWVudHM6IEZ1bmN0aW9uO1xuICAgIGZyYW1ld29ya1N0YWJpbGl6ZXJzOiBBcnJheTxGdW5jdGlvbj47XG4gICAgc2V0VGltZW91dDogRnVuY3Rpb247XG4gICAgY2xlYXJUaW1lb3V0OiBGdW5jdGlvbjtcbiAgICBzZXRJbnRlcnZhbDogRnVuY3Rpb247XG4gICAgY2xlYXJJbnRlcnZhbDogRnVuY3Rpb247XG4gICAgZW5jb2RlVVJJOiBGdW5jdGlvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmcodHlwZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZVsnbmFtZSddIHx8IHR5cGVvZiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvYmogPT0gbnVsbDtcbn1cblxuY29uc3QgU1RSSU5HX01BUF9QUk9UTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpY3RTdHJpbmdNYXAob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBTVFJJTkdfTUFQX1BST1RPO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KHRva2VuOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJycgKyB0b2tlbjtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4ub3ZlcnJpZGRlbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGAke3Rva2VuLm92ZXJyaWRkZW5OYW1lfWA7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGAke3Rva2VuLm5hbWV9YDtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSB0b2tlbi50b1N0cmluZygpO1xuICAgIGNvbnN0IG5ld0xpbmVJbmRleCA9IHJlcy5pbmRleE9mKCdcXG4nKTtcbiAgICByZXR1cm4gbmV3TGluZUluZGV4ID09PSAtMSA/IHJlcyA6IHJlcy5zdWJzdHJpbmcoMCwgbmV3TGluZUluZGV4KTtcbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlcldyYXBwZXIge1xuICAgIHN0YXRpYyBwYXJzZUludEF1dG9SYWRpeCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCByZXN1bHQ6IG51bWJlciA9IHBhcnNlSW50KHRleHQpO1xuICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgJyArIHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTnVtZXJpYyh2YWx1ZTogYW55KTogYm9vbGVhbiB7IHJldHVybiAhaXNOYU4odmFsdWUgLSBwYXJzZUZsb2F0KHZhbHVlKSk7IH1cbn1cblxuLy8gSlMgaGFzIE5hTiAhPT0gTmFOXG5leHBvcnQgZnVuY3Rpb24gbG9vc2VJZGVudGljYWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gYSA9PT0gYiB8fCB0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInICYmIGlzTmFOKGEpICYmIGlzTmFOKGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNKc09iamVjdChvOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbyAhPT0gbnVsbCAmJiAodHlwZW9mIG8gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG8gPT09ICdvYmplY3QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50KG9iajogRXJyb3IgfCBPYmplY3QpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKG9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKG9iajogRXJyb3IgfCBPYmplY3QpIHtcbiAgICBjb25zb2xlLndhcm4ob2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlT25QYXRoKGdsb2JhbDogYW55LCBwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBsZXQgb2JqOiBhbnkgPSBnbG9iYWw7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkgJiYgb2JqW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtuYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgb2JqID0ge307XG4gICAgfVxuICAgIG9ialtwYXJ0cy5zaGlmdCgpXSA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzSnNPYmplY3Qob2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbn0iXX0=