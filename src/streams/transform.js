import { Transform } from "stream";

const transform = async() => {
  const reversedData = new Transform({
    transform(chunk, enc, cb) {
      const reversedText = chunk.toString().split('').reverse().join('');
      cb(null, reversedText);
    }
  });

  process.stdin.pipe(reversedData).pipe(process.stdout);
};

transform();
