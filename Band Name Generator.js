const firstWords = ['The', 'Big', 'Small', 'Shiny', 'Angry', 'Hungry', 'Iron', 'Confused', 'Electronic', 'Molten'];
const secondWords = ['Chocolate', 'Midnight', 'Golden', 'Little', 'Rusty', 'Hungry', 'Flying', 'Musical', 'Super', 'Psychic'];
const thirdWords = ['Lobsters', 'Rhinos', 'Killers', 'Radiators', 'Robots', 'Spiders', 'Roses', 'Ladies', 'Raspberries', 'Monkeys'];
let firstWord = firstWords[Math.floor(Math.random() * 10)];
let secondWord = secondWords[Math.floor(Math.random() * 10)];
let thirdWord = thirdWords[Math.floor(Math.random() * 10)];
let bandName = firstWord + ' ' + secondWord + ' ' + thirdWord;

console.log("Your new band is called '" + bandName + "'! Rock On!");