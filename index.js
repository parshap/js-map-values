"use strict";

module.exports = (obj, map) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, map(value, key, obj)]))
