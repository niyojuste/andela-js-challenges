const arr = [2, 34, 12, 1, 22, 9, 2, 18]

function reversing(arr) {
	let rra = []

	for (let i = arr.length - 1; i >= 0; i--) {
		rra[arr.length - 1 - i] = arr[i]
	}

	return rra
}


function reversed(arr) {
	return arr.reverse()
}

console.log(reversing(arr))
console.log(reversed(arr))
