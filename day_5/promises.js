const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("You are fool!");
    }, 100);
});

const p4 = await Promise.all([p1, p2, p3]).then((values) => {
    console.log(values)
    return values;
}).catch(error => { console.log(error); return error });

const p5 = await Promise.allSettled([p1, p2, p3]).then((values) => {
    console.log(values)
    return values;
}).catch(error => { console.log(error); return error });

const p6 = await Promise.any([p1, p2, p3]).then((values) => {
    console.log(values)
    return values;
}).catch(error => { console.log(error); return error });

console.log(`${p5[2].status} because ${p5[2].reason}`)
console.log(p5)
console.log(p6)