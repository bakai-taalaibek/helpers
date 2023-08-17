export default function inclined(number: number, forOne: string, forTwo: string, forFive: string): string {
  const double = Math.abs(number) % 100
  if (double < 21 && double > 4) {
    return `${number} ${forFive}`
  }
  const single = double % 10
  if (single === 1) {
    return `${number} ${forOne}`
  } else if (single < 5 && single > 1) {
    return `${number} ${forTwo}`
  } else {
    return `${number} ${forFive}`    
  }
}

const words = ['arbuz', 'arbuza', 'arbuzov']
function toCheck(numberForchecking: number, wordForChecking: string, func: Function): boolean {
  const result = func(numberForchecking, ...words)
  process.argv[2] === '--test' || console.log(result)
  const inclinedWord = result.split(' ')[1]
  if (inclinedWord === wordForChecking) {
    return true
  } else {
    return false
  }
}

const valuesForTest = [
  {number: 1, word: 'arbuz'},
  {number: 2, word: 'arbuza'},
  {number: 20, word: 'arbuzov'},
  {number: 0, word: 'arbuzov'},
  {number: -51, word: 'arbuz'},
  {number: 5, word: 'arbuzov'},
  {number: 100, word: 'arbuzov'},
  {number: 99, word: 'arbuzov'},
  {number: 100000, word: 'arbuzov'},
]

let count = 0
for (let i = 0; i < valuesForTest.length; i++) {
  if (!toCheck(valuesForTest[i].number, valuesForTest[i].word, inclined)) {
    count++
  }
}

if (count > 0) {
  console.log('Test failed')
} else {
  console.log('Test passed')
}
