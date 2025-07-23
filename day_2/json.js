const myData = {
    "id": "1",
    "name": "Naveen",
    "role": "Junior Developer",
    "age": "21",
    "native": "Ariyalur"
}

console.log(JSON.stringify(myData, ["native"]));

const json1 = JSON.stringify(myData, ["name", "role"], 5);

console.log("Only name and role: " + json1);

const json2 = JSON.stringify(myData, (key, value) => {
    if (key != "native") return value;
}, 2)

console.log("Without Native: " + json2);


const json3 = JSON.parse(json2, (key, value) => {
    if (key == "age" || key == "id") return parseInt(value);

    return value;
})

console.log(json3);


function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Naveen" };
greet.call(person, "Hello");

greet.apply(person, ["Hi"]);


const greetNaveen = greet.bind(person, "Welcome");

greetNaveen();



let obj = {
    data: "none",
    value: {
        input: "nothing"
    }
}

let clone = structuredClone(obj);

console.log("Obj", obj)
console.log("clone", clone)


clone.data = "everyhting";
clone.value.input = "changed";

console.log("After change");

console.log("Obj", obj)
console.log("clone", clone)
