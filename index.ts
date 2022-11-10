// Q1:
// You have to design a programme/ function to achieve below objectives:
// Given that there is an array contains number from 1 to 100.
// When the number is multiple of 3, print "bug"
// When the number is multiple of 5, print "fix"
// When the number is multiple of 3 and 5, print "bugfix"
function buildNumbersArray(total: number) {
	return Array.from(Array(total).keys()).map((num) => num + 1)
}
function answer1(numbers: number[]) {
	numbers.forEach((num) => {
		let result = ''
		if (num % 3 === 0) {
			result = 'bug'
		}
		if (num % 5 === 0) {
			result += 'fix'
		}
		if (result.length > 0) {
			console.log(num, result)
		}
	})
}
answer1(buildNumbersArray(100))

// Q2:
// You have to design a programme/ function to achieve below objectives:
// Given two arrays, [1,2,3,4,5] and [2,3,1,0,5]
// find which number(s) is/are not present in the second array
// Answer: [4]
function answer2(array1: number[], array2: number[]) {
	const result: number[] = []
	array1.forEach((valInArray1) => {
		if (array2.indexOf(valInArray1) === -1) {
			result.push(valInArray1)
		}
	})
	console.log('answer2', result)
	return result
}
answer2([1, 2, 3, 4, 5], [2, 3, 1, 0, 5])

//Q3
// You have to design a programme/ function to achieve below objectives:
// Given two arrays, [1,2,3,4,5] and [2,3,1,0,5]
// find which number(s) is/are common in both array
// Answer: [1, 2, 3, 5]
function answer3(array1: number[], array2: number[]) {
	const result: number[] = []
	array1.forEach((valInArray1) => {
		if (array2.indexOf(valInArray1) !== -1) {
			result.push(valInArray1)
		}
	})
	console.log('answer3', result)
	return result
}
answer3([1, 2, 3, 4, 5], [2, 3, 1, 0, 5])

//Q4
// You have to design a programme/ function to achieve below objectives:
// Given two arrays, [1,2,3,4,5] and [2,3,1,0,5]
// merge these two arrays and unique to display
// Answer: [0 ,1, 2, 3, 4, 5]
function answer4(array1: number[], array2: number[]) {
	// 1, Set
	// const result = Array.from(new Set(array1.concat(array2))).sort()

	// 2, Object key
	const resultObj: { [key: number]: boolean } = {}
	array1.concat(array2).forEach((valInArray) => {
		resultObj[valInArray] = true
	})
	const result = Object.keys(resultObj).map((key) => parseInt(key, 10))
	console.log('answer4', result)
	return result
}
answer4([1, 2, 3, 4, 5], [2, 3, 1, 0, 5])

//Q5
// You have to design a programme/ function to achieve below objectives:
// How do you find the closest integer 17 in [30, 1, 5, 16, 19, 21, 2, 55]?
// Answer: 16
function answer5(array: number[], target: number, include: boolean = false) {
	let diffObj: { [diff: number]: number[] } = {}

	for (let i = 0; i < array.length; i++) {
		const diff = Math.abs(array[i] - target)

		// closest include same value?
		if (!include && diff === 0) continue

		if (!diffObj[diff]) {
			diffObj[diff] = [array[i]]
		} else {
			diffObj[diff].push(array[i])
		}
	}

	// Is array, maybe 2 closest values eg, target = 20, 19 and 20 will be the closest value
	let result: number[] | number = []
	if (Object.values(diffObj).length > 0) {
		result = Object.values(diffObj)[0]
	}
	if (result.length === 1) {
		result = result[0]
	}
	console.log('answer5', result)
	return result
}
answer5([30, 1, 5, 16, 19, 21, 2, 55], 17)
