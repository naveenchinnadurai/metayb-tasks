function createCounter() {
    let count = 0;
    console.log("main");

    const closureFunction = function () {
        console.log("Count: ", count);
        count++;
        return count;
    }

    return closureFunction;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log("Second Counter")

console.log(counter2());
console.log(counter2());
console.log(counter2());

function delayedMessage(msg) {
    console.log('SetTimeOut Starter');
    setTimeout(() => {
        console.log(msg);
    }, 1000);
    console.log('SetTimeOut Ended');
}

delayedMessage("Hello");