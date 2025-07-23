import { createInterface } from 'readline';

function getInputFromUser(query) {
    const getInput = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        getInput.question(query, (answer) => {
            getInput.close();
            resolve(answer);
        });
    });
}

let studentsData = [
    {
        id: 1,
        sname: "Naveen",
        Native: "Ariyalur",
        Dept: "CSE",
        Age: 21
    },
    {
        id: 2,
        sname: "karthi",
        Native: "Madurai",
        Dept: "AI",
        Age: 55
    },
    {
        id: 3,
        sname: "Suresh",
        Native: "Salem",
        Dept: "IT",
        Age: 48
    },
];

const getAllStudent = () => studentsData;

const getStudentById = async () => {
    const id = await getInputFromUser("Enter Student Id: ");
    const student = studentsData.filter(e => e.id == id);
    console.log(student.length > 0 ? student : "Student not found.");
};

const addStudent = async () => {
    const name = await getInputFromUser("Enter Student Name: ");
    const native = await getInputFromUser("Enter Native: ");
    const dept = await getInputFromUser("Enter Department: ");
    const age = await getInputFromUser("Enter Age: ");

    try {
        const newId = studentsData.length > 0
            ? studentsData[studentsData.length - 1].id + 1
            : 1;

        studentsData.push({
            id: newId,
            sname: name,
            Native: native,
            Dept: dept,
            Age: parseInt(age)
        });

        console.log("Student added successfully.");
    } catch (error) {
        console.log("Error Adding Student!!", error);
    }
};

const removeStudent = async () => {
    const id = await getInputFromUser("Enter Student Id: ");

    if (studentsData.filter(e => e.id == id).length == 0) {
        console.log("Invalid Student Id!! No student Found");
        return;
    }

    studentsData = studentsData.filter(e => e.id != id);
    console.log("Student Deleted Successfully");

}

const updateStudentInfo = async () => {

    const studentId = await getInputFromUser("Enter Student Id: ");


    if (!(studentsData.some((e) => e.id == parseInt(studentId)))) {
        console.log("Invalid Student Id!!");
        return;
    }

    let index;

    for (const e of studentsData) {
        if (e.id == studentId) {
            index = studentsData.indexOf(e);
            break;
        }
    };

    console.log(`Select option to update student info.
    1. Name     2. Native   3. Dept   4. Age `)

    const updateOption = await getInputFromUser("");

    switch (updateOption) {
        case '1':
            const name = await getInputFromUser("Enter New Name: ");
            studentsData[index].sname = name;
            console.log("updated Successfully!");
            break;
        case '2':
            const native = await getInputFromUser("Enter Native: ");
            studentsData[index].Native = native;
            console.log("updated Successfully!");
            break;
        case '3':
            const dept = await getInputFromUser("Enter New Dept Name: ");
            studentsData[index].Dept = dept;
            console.log("updated Successfully!");
            break;
        case '4':
            const age = await getInputFromUser("Enter New age: ");
            studentsData[index].Age = age;
            console.log("updated Successfully!");
            break;
        default:
            console.log("Invalid Enter");

    }
}

const main = async () => {
    let exit = false;

    while (!exit) {
        console.log(`
************** Student Record Manager ***************
0. Exit
1. Add Student
2. Get all Students
3. Get Student Info by Id
4. Update Student Info
5. Remove Student `);

        const option = await getInputFromUser("Select your option: ");

        switch (parseInt(option)) {
            case 0:
                exit = true;
                console.log("Exiting...");
                break;
            case 1:
                await addStudent();
                break;
            case 2:
                console.log("fetched details of all Students:");
                console.log(getAllStudent());
                break;
            case 3: {
                await getStudentById();
                break;
            }
            case 4:
                console.log("Update Student Info");
                await updateStudentInfo();
                break;
            case 5:
                console.log("Remove Student from the DB");
                await removeStudent();
                break;
            default:
                console.log("Invalid Input. Please choose between 0-4.");
        }
    }
};

main();
