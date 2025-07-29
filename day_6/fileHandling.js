import { writeFile, readFile, appendFile } from 'fs/promises';
import { writeFile as writeFileCallback, createReadStream, createWriteStream } from 'fs';

const main = async () => {
    let data;

    data = await readFile('day_6/file.txt', 'utf8').then(() => {
        console.log(data)
    }).catch(() => {
        console.log("Error reading file")
    });

    writeFileCallback('day_6/file.txt', "Written from callback writeFile method", 'utf-8', (error) => {
        if (error) {
            console.log("Error Writting to the File");
        } else {
            console.log("Writting file successfull from callback method")
        }
    });

    writeFile('day_6/file.txt', 'Newly added Data', 'utf8').then(() => {
        console.log("Writting file Successfully!");
    }).catch(() => {
        console.log("Error Write to the file");
    });

    appendFile('day_6/file.txt', "\nNextline", { encoding: 'utf8' })
        .then(() => console.log("Updated file successfully"))
        .catch(() => {
            console.log("Error Updating file")
        });


    // const stream = createReadStream('day_6/file.txt', 'utf-8');
    // stream.on('data', chunk => {
    //     console.log('Chunk:', chunk);
    // });

    // const writeStream = createWriteStream('day_6/file.txt', 'utf-8');

    // writeStream.write('next data ');
}

const readFromFile = (path) => {
    readFile(path, 'utf-8')
        .then((data) => console.log(data))
        .catch(() => console.log("Error Reading File"))
}

const writeInFile = (path, newData) => {
    writeFile(path, newData, 'utf-8')
        .then(() => console.log("Overwritten to the file"))
        .catch(() => console.log("Error Writing file!"))
}

const appendContentToFile = (path, nextline) => {
    appendFile(path, `\n${nextline}`, 'utf-8')
        .then(() => console.log("Nextline added to the file"))
        .catch(() => console.log("Error Adding new line"))
}

const path = 'day_6/file.txt';


writeInFile(path, "New Data Replaced using nodejs");

appendContentToFile(path, "This is nextline");
readFromFile(path);