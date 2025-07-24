import { createInterface } from "readline";



const getInputFromUser = (query) => {
    const getInput = createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve, reject) => {
        try {
            getInput.question(query, (input) => {
                resolve(input);
                getInput.close();
            })
        } catch (error) {
            reject("Error getting Input!");
        }

    })
}


const taskManager = (
    function () {
        let tasks = [];

        return {
            addTask: (task) => {
                tasks.push(task);
                console.log("\nTask Added to the list!");
            },
            getTask: () => {
                let str = '\n';
                for (let i = 0; i < tasks.length; i++) {
                    str += `${i} - ${tasks[i]}\n`;
                }
                return str;
            },
            deleteTask: (id) => {
                const deletedTask = tasks[id];
                tasks = tasks.filter((e, i) => i != id);
                console.log(`\n${deletedTask} is deleted from the list!`);
            },
            updateTask: (id, updatedTask) => {
                console.log(updatedTask);
                tasks = tasks.map((e, i) => i == id ? updatedTask : e)
                console.log("\nupdated Task!!");
            }
        }
    })();



doLoop: do {
    console.log(
        `
*************Task Manager**********
0. Exit
1. Add New Task
2. Display all Tasks
3. Update Task
4. Remove a Task
`
    )

    const option = await getInputFromUser("Enter Your Option: ")

    switch (option) {
        case '0':
            break doLoop;
        case '1':
            taskManager.addTask(await getInputFromUser("Enter Task: "));
            break
        case '2':
            console.log(taskManager.getTask());
            break;
        case '3':
            console.log(taskManager.getTask());
            taskManager.updateTask(await getInputFromUser("Enter Task No: "), await getInputFromUser("Task updation: "));
            break;
        case '4':
            console.log(taskManager.getTask());
            taskManager.deleteTask(await getInputFromUser("Enter Task No: "));
            break;
        default:
            console.log('Invalid Input');
            break;
    }
} while (true)