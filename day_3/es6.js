//destructuring objects
const myData = {
    Name: "Naveen",
    Role: "Junior Developer",
    Education: [
        {
            course: "Bachelor's of Engineering",
            Branch: ["Computer Science and Engineering"],
            Location: "Namakkal",
            CompletedOn: 2025
        },
        {
            course: "Higher Secondary",
            Branch: ["Maths", "English", "Physics", "Chemistry", "Computer"],
            Location: "Ariyalur",
            CompletedOn: 2021
        },
        {
            course: "Senior Secondary",
            Branch: ["Tamil", "English", "Maths", "Science", "Social"],
            Location: "Namakkal",
            CompletedOn: 2025
        },
    ],
    Skills: [
        "Java",
        "Reactjs",
        "Typescript",
        "Nodejs",
        "Postgresql",
        "DrizzleORM",
        "Git/GitHub",
    ],
    Dimensions: {
        height: "160 CM",
        weight: "50 Kg"
    }
}

const { Name, Role } = myData;

console.log(`${Name} has Started a Position as ${Role} at Metayb!`)

const { height, weight } = myData.Dimensions;

console.log("Height: ", height);
console.log("Weight: ", weight);

const [Degree, HSC, SSC] = myData.Education;

console.log("Completed Degree: ", Degree);
console.log("Higher Secondary: ", HSC);
console.log("Senior Secondary: ", SSC);

const { Skills } = myData;

console.log(Skills)

//Spread and Rest operator

const frontendSkills = ['Reactjs', 'Nextjs', 'Typescript', 'Tailwindcss', 'Shadecn', 'Redux'];
const backendSkills = ['Nodejs', 'Express', 'DrizzleORM', 'Postgresql', 'RestAPI'];
const otherSkils = ['Git', 'GitHub', 'Postman'];

const mySkills = [...frontendSkills, ...backendSkills, ...otherSkils];

console.log(mySkills);


const myDataClone = { ...myData };

console.log(myDataClone);