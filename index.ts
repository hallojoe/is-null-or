export function isNullOrEmpty(thing:any) {    
  return typeof thing === "undefined" 
  || thing === null 
  || thing === "" 
  || (Array.isArray(thing) && thing.length === 0) 
  || (typeof thing === "object" && Object.keys(thing).length === 0)
}

export function isNullOrWhitespace(thing:any) {    
  return isNullOrEmpty(typeof thing === "string" ? thing.trim() : thing)
}
