"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrWhitespace = exports.isNullOrEmpty = void 0;
function isNullOrEmpty(thing) {
    return typeof thing === "undefined"
        || thing === null
        || thing === ""
        || (Array.isArray(thing) && thing.length === 0)
        || (typeof thing === "object" && Object.keys(thing).length === 0);
}
exports.isNullOrEmpty = isNullOrEmpty;
function isNullOrWhitespace(thing) {
    return isNullOrEmpty(typeof thing === "string" ? thing.trim() : thing);
}
exports.isNullOrWhitespace = isNullOrWhitespace;
