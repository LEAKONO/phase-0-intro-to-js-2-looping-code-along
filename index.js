function writeCards(namesArray, eventName) {
    let cardsArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsArray;
}
function countDown(number) {
    if (number < 0) {
        console.log(10);
        return;
    }

    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
