let Ask_age = 0
let Number_of_people = game.askForNumber("how many people are in the room ", 2)
let N = 0
for (let index = 0; index < Number_of_people; index++) {
    Ask_age = game.askForNumber("How old are you ", 2)
    N += Ask_age
}
game.splash("The total of our ages is " + N)
game.splash("The average age is " + N / Number_of_people)
