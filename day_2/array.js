const arr = [1, 2, [3, 4, [5, 6, [4, 5]]]];

console.log(arr.flat(2));

console.log(arr);


const arr1 = [1, 2, 0];

const result = arr1.flatMap((num) => (num === 2 ? [7, 7, [7, 10]] : num));

console.log(result);


const data = [
    {
        marks: 80
    },
    {
        marks: 70
    },
    {
        marks: 79
    },
    {
        marks: 65
    },
]

const avg = data.reduce((acc, curr) => acc + (curr.marks / data.length),0);

console.log(avg)