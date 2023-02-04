function generateRandomNumber(num) {
    // Gets a random number from 0 to num - 1
    return Math.floor(Math.random() * num)
}

const wisdomSources = {
    adjectives: ['amazing', 'brave', 'courageous', 'daring', 'determined'],
    actions: ['keep going', 'never give up', 'keep fighting', 'keep trying', 'stay strong'],
    wordsOfEncouragement: ['you got this', 'you are enough', 'you are worthy', 'you are loved', 'you are appreciated']
}

let inspirationalMessages = []

for (let i = 0; i < 1; i++) {
    let adjectiveIdx = generateRandomNumber(wisdomSources.adjectives.length)
    let actionIdx = generateRandomNumber(wisdomSources.actions.length)
    let wordsOfEncouragementIdx = generateRandomNumber(wisdomSources.wordsOfEncouragement.length)
    inspirationalMessages.push(`You are ${wisdomSources.adjectives[adjectiveIdx]}. ${wisdomSources.actions[actionIdx]}. ${wisdomSources.wordsOfEncouragement[wordsOfEncouragementIdx]}.`)
}

console.log(inspirationalMessages.join(''))

