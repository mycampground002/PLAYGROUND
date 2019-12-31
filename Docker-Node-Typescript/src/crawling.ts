import * as request from "request";

function crawling() {
  return new Promise<string>((resolve, reject) => {
    request.get('https://naver.com', (err, res) => {
      if (err) reject(err);
      resolve(res.body);
    });
  });
}

export { crawling };