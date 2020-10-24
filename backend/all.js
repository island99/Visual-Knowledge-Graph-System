var config = require('./config.json')

function allnodesPromise(query) {
    return new Promise((resolve, reject) => {
        // console.log(resolve);
        var neo4j = require('node-neo4j');
        db = new neo4j(`http://${config.username}:${config.password}@localhost:7474`);
        db.cypherQuery(query, function(err, result) {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
}
module.exports.allnodesPromise = allnodesPromise

