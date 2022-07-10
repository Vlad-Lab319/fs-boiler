import fs, { WriteStream } from 'fs';

const writeStream = fs.createWriteStream('./assets/secret.txt');

writeStream.write('test string to write in a stream', 'base64');

writeStream.on('finish', () => {
  console.log('wrote all data to file');
});

writeStream.end();

