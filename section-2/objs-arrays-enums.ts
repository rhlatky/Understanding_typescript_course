// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; //tuple
// } = {
// 	name: 'Max',
// 	age: 30,
// 	hobbies: ['Sports', 'Cooking'],
// 	role:  [2, 'author'] //tuple
// }

enum Role { ADMIN, READ_ONLY = 'read_only', AUTHOR = 200 }

const person = {
	name: 'Max',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role:  Role.AUTHOR
}

let favoriteActivities: string[];
favoriteActivities = person.hobbies;

console.log(person.name);

for(const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
	console.log('is author');
}