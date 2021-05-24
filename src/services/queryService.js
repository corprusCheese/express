
const { parse } = require('querystring');

class QueryService {
    postParams(req, callback) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            let params = parse(body);
            callback(params)
        })
    }
}

module.exports = new QueryService();
