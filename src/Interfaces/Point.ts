// this looks much like using types instead of in types
//but types can be used with primitives and union but interface cannot
//SEE EXAMPLE BELLOW
// interface Point = number | string //this won't work since interface returns values and not types
//interface is used incase of objects
type Point = number | string; // but this will work perfectly.

export default Point;
