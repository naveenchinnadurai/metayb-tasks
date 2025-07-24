const fetchData = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve({
                data: "Even Number"
            });
        } else {
            reject({
                msg: "Odd Number"
            })
        }
    });
};

try {
    const message = await fetchData(4);
    console.log("Even: ",message.data);

    const message2 = await fetchData(5);
    console.log(message2);
} catch (error) {
    console.log("Error: ",error.msg)
}
