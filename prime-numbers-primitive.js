const arr = [23, 22, 1, 3, 20, 10, -1, 7, 19, 26, 15, 8, 24]

function prime(arr) {
    const primes = []
	let size = 0

	for (let i = 0; i < arr.length; i++) {
		let count = 0
		for (j = arr[i] - 1; j > 1; j--) {
			if (arr[i] % j === 0) {
				count++
			}
		}
		if (count === 0 && arr[i] > 0) {
			primes[size] = arr[i]
			size++
		}
	}

    return primes
}

console.log(prime(arr))
