const arr = ["javascript", "Typescript", "React", "Nodejs"];

const arrObject = () => arr.map(item => ({ name: item, length: item.length }));

console.log(arrObject());


const newObj = () => {
    return arr.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {})
}


console.log(JSON.stringify(newObj()));
console.log(JSON.parse(JSON.stringify(newObj())));


const str = "Naveen";

const characterFrequency = () => {
    return str.toLowerCase().split('').reduce((acc, curr) => {
        acc[curr] = str.toLowerCase().split('').filter((c) => c == curr).length;
        return acc;
    }, {})
}

console.log(characterFrequency());

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log(keys);
keys.push("more");
console.log(keys);

const doo = (
    function () {
        var data = "Hii";
        return {
            updateData: (newData) => {
                data = newData;
            },
            getData: () => data,
        };
    }
)()


console.log(doo.getData());
console.log(doo.updateData("Hello Everyone!!"));
console.log(doo.getData());
