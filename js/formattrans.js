function random(l, u) {
    return Math.floor(Math.random() * (u - l + 1)) + l
}

function nodesFoldToD3(d) {
    let data;
    // console.log('nodesFoldToD3_2,data',d.data)
    data = d.data;

    var nodes = [];
    var relationships = [];
    var nodeset = new Set();
    var relset = new Set();
    // console.log(data);
    for (let name in data) {
        var project = data[name];
        console.log(project);
        var nodenums = [0, 4, 8]
        nodenums.forEach(n => {
            if (project[n] == null || nodeset.has(project[n]['_id'])) {} else {
                nodeset.add(project[n]['_id']);
                // console.log(nodeset)
                var node = {};
                node['id'] = project[n]['_id'].toString();
                project[n + 1] = project[n + 1].filter((x) => x !== '');
                // console.log('project[n+1]',project[n+1]);
                if (project[n + 1][0] == 'Person')
                    node['label'] = project[n]['name']
                else if (project[n + 1][0] == 'Movie') {
                    node['label'] = project[n]['title']
                }


                // console.log(node);
                var proper = {};
                proper['type'] = project[n + 1][0];
                // console.log(proper['type']);
                for (let pro in project[n]) {
                    {
                        proper[pro] = project[n][pro];
                    }

                    node['properties'] = proper;
                }

                nodes.push(node);
            }
        })



        if (project[2] == null || relset.has(project[2]['_id'])) {} else {
            var relation = {}
            relset.add(project[2]['_id']);
            // relation['id']=project[2]['_id'].toString();
            relation['label'] = project[3];
            relation['source'] = project[0]['_id'].toString();
            relation['target'] = project[4]['_id'].toString();
            // relation['linknum']=1;
            relationships.push(relation);
        };
        if (project[6] == null || relset.has(project[6]['_id'])) {
            // console.log(relset)
        } else {
            var relation = {}
            relset.add(project[6]['_id']);
            // relation['id']=project[6]['_id'].toString();
            relation['label'] = project[7];
            relation['source'] = project[4]['_id'].toString();
            relation['target'] = project[8]['_id'].toString();
            // relation['linknum']=1;
            relationships.push(relation);
        }
    }
    // console.log('nodes',nodes.length)
    if (nodes.length == 0) {
        var alert = 1;
        return alert;
    }
    var content = {

            'nodes': nodes,
            'edges': relationships

        }
        // console.log(content)
    return JSON.stringify(content)
}