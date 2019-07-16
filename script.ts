interface Person {
	name: string;
	age: number;
}

const printPerson = (person: Person): Person => {
	console.log(`Name: ${person.name}, Age: ${person.age}`);

	return person;
};

let myPerson: Person = {
	name: 'Lameco Sanderson',
	age: 18
};
printPerson(myPerson);
