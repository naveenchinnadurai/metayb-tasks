const users = [
    {
        id: 1,
        name: "Naveen"
    },
    {
        id: 2,
        name: "lenova"
    },
    {
        id: 3,
        name: "thinkpad"
    },
    {
        id: 4,
        name: "dell"
    },
    {
        id: 5,
        name: "ryzen"
    },
]


const getUserData = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = users.filter(user => user.id == id);

            if (user.length != 0) {
                resolve(user[0]);
            } else {
                reject("Invalid User id");
            }
        }, 2000);
    })

}

const main = async () => {
    try {
        const user = await getUserData(2);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

const secondary = async () => {
    await getUserData(9).then(result => result).catch((error) => console.log(error))
}

const interval = (seconds) => {
    let count = 1;

    const timer = setInterval(() => {
        console.log(count);

        if (count == seconds) {
            clearInterval(timer);
        }

        count++;
    }, 1000);
};

// interval(5);
main();
secondary();