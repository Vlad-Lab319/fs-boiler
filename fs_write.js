import fs from 'fs';
import { Buffer } from 'node:buffer';

const path = './assets/ghetto_gospel.txt';

let buffer = Buffer.from('Those who wish to follow me\nI welcome with my hands\nAnd the red sun sinks at last');

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, '', (err) => {
    if (err) throw err;
  });
}


fs.open(path, 'w', function (err, fd) {
  if (err) {
    throw 'could not open file: ' + err;
  }

  fs.write(fd, buffer, 0, buffer.length, null, function (err) {
    if (err) throw 'error writing file: ' + err;
    fs.close(fd, function () {
      console.log('wrote the file successfully');
    });
  });
});

fs.appendFile(path, '\n\n\nEmpire State of Mind - JAY-Z\n\nI used to cop in Harlem;\nhola, my Dominicanos', (err) => {
  if (err) throw err;
  console.log('File was updated');
});

fs.appendFile(path, '\nRight there up on Broadway', (err) => {
  if (err) throw err;
  console.log('The lyrics were updated!');
});