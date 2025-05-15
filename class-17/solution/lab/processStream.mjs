export async function processStream(stream) {
  return new Promise((resolve, reject) => {
    let data = '';

    stream.on('data', (chunk) => {
      data += chunk;
    });

    stream.on('end', () => {
      try {
        const json = JSON.parse(data);
        resolve(json);
      } catch (error) {
        console.log(error);
        reject('Error parsing JSON data');
      }
    });

    stream.on('error', (error) => {
      console.log(error);
      reject('Error reading stream');
    });
  });
}
