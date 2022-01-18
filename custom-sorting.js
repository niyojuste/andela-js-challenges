const arr = [23, 22, 1, 3, 20, 10, -1, 7, 19, 26, 15, 8, 24]

function customSorting() {
	let finarr = []
	let size = 0

	for (let i = 0; i < arr.length; i++) {
		let count = 0

		for (let j = arr[i] - 1; j > 1; j--) {
			if (arr[i] % j === 0) {
				count++
			}
		}
		if (count > 0) {
			finarr[size] = arr[i]
			size++
		}
	}

	for (let i = 0; i < finarr.length - 1; i++) {
		let max = finarr[i]
		let pos = i

		for (let j = i + 1; j < finarr.length; j++) {
			if (max < finarr[j]) {
				max = finarr[j]
				pos = j
			}
		}

		let temp = finarr[i]
		finarr[i] = finarr[pos]
		finarr[pos] = temp
	}

	return finarr
}

console.log(customSorting(arr))
