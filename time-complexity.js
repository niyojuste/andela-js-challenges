const arr =  [3,1,3,4,4,5,3,5,3,3,3,6,3]

let checked = []
let majority = false

for(let i = 0; i < arr.length; i++) {
    let count = 0
    if(checked.includes(arr[i])) {
        continue
    }
    checked.push(arr[i])
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === arr[i])
            count++
    }
    if(count > arr.length/2) {
        majority = true
    }
}

console.log(majority)