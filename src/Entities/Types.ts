//BASIC TYPES
export let id: number = 5;
export let company: string = "KellynCodes";
export let isPublished: boolean = true;
export let x: any = "Kelly";

//cant put string to an array of numbers
export let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//any type
export let arr: any[] = [1, true, "KellY"]; //you can combine any type on "any" type is ts

//TUPLE
export let person: [number, string, boolean] = [1, "oops", false]; //arranged in orther of types

//ARRAY OF TUPLES
export let employee: [number, string][];
