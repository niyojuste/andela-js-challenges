let word = 'SHABBA'

function palindromeCheck(str) {
	let palindrome = true

	word = word.replace(/\W/g, '').toLowerCase()

	for (let i = 0; i < word.length / 2; i++) {
		if (word[i] !== word[word.length - i - 1]) {
			return !palindrome
		}
		return palindrome
	}
}

console.log(palindromeCheck(word))
