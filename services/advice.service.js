import https from 'https';

export const fetchAdvice = () => {
  return new Promise((resolve, reject) => {
    https.get('https://api.adviceslip.com/advice', (res) => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};
