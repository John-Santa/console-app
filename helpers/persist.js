import fs from 'fs';

const pathFile = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(pathFile, JSON.stringify(data));
}

const readDB = () => {
    if (!fs.existsSync(pathFile)) {
        return null;
    }
    const info = fs.readFileSync(pathFile, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
}

export {
    saveDB,
    readDB
}