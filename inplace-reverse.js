const arr = [3, 12, 1, 10, 8, 15, 0]

function inplaceReversing(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i]
		arr[i] = arr[arr.length - i - 1]
		arr[arr.length - i - 1] = temp
	}
	return arr
}
console.log(inplaceReversing(arr))
