const fs = require('fs');

fs.writeFile('massege2.txt', 'Hello form aniket tooo!', (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
})

fs.readFile('./massege2.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});