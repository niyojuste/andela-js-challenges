const arr = [23, 22, 1, 3, 20, 10, -1, 7, 19, 26, 15, 8, 24]

function primeNumbers(arr) {
    return arr.filter((num) => {
        let prime = true
        for(let i = num - 1; i > 1; i--) {
            if(num % i === 0) {
                prime = false
            }
        }
        if(prime && num > 0) {
            return num
        }
    })
}


console.log(primeNumbers(arr))