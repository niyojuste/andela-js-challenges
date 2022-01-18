const arr = [
	'Patrick wyne, 30',
	'lil wyne, 32',
	'Eric mimi, 21',
	'Dodos deck, 21',
	'Alian Dwine, 22',
	'Patrick wyne, 33',
	'Patrick wyne, 100',
	'Patrick Wyne, 40',
]

function identityObject(arr) {
	let ids = {}

	for (let i = 0; i < arr.length; i++) {
		let person = arr[i].split(",")
        let name = person[0].split(" ")
		ids[name[0]] = {
		    	secondName: name[1],
		    	age: person[1],
		}
	}
	return ids
}

console.log(identityObject(arr))
