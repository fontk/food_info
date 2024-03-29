import http from 'http';
import querystring from 'querystring';

export default class FoodList {
  constructor(param) {
    throw "Error, instancing constructor of a static class. \n"+param;
  }
  static async request(max, offset) {
    return new Promise((resolve, reject) => {

      const postData = querystring.stringify({
        'api_key': process.env.USDA_API_KEY,
        'format': 'json',
        'lt' : 'f',
        'max': max,
        'offset': offset
      });
      const options = {
        hostname: 'api.nal.usda.gov',
        protocol: 'http:',
        port: 80,
        path: '/ndb/list/?api_key='+process.env.USDA_API_KEY,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
          'Transfer-Encoding': 'chunked'
        }
      };

      const req = http.request(options, (res) => {
        // console.log(res);
        res.setEncoding('utf8');
        var body = [];
        res.on('data', (chunk) => {
          body.push(chunk);
        });
        res.on('end', () => {
          try {
            body = body.toString();
          } catch (e) {
            reject(e);
          }
          resolve(body);
        });
      });

      req.on('error', (e) => {
        reject(e);
      });

      req.write(postData);

      req.end();
    });
  }

  static async update(max,offset) {
    return this.request(max,offset).then(result => {
      result = JSON.parse(result);
      // UPDATE COLLECTION WITH THE REQUEST INFO
      
      console.log(result.list.item);

      return result;
    }).catch(e => e);
  }
  
}