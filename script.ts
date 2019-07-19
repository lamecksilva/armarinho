let a: string = `
type User {
	name: String
	email: String
}
`;

let b: string = `
input UserInput {
	name: String
	password: String
}
`;

let c: string = `
type Person {
	name: String
	age: Int
}`;

let r = ''.concat(a, b, c);
console.log(r);
