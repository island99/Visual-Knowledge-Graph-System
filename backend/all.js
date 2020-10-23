var username = neo4j;
var password = 000000;

function allnodesPromise(query) {
    return new Promise((resolve, reject) => {
        // console.log(resolve);
        var neo4j = require('node-neo4j');
        db = new neo4j(`http://${username}:${password}@localhost:7474`);
        db.cypherQuery(query, function(err, result) {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });
}
module.exports.allnodesPromise = allnodesPromise
    // module.exports.allnodes=allnodes	localhost:7687