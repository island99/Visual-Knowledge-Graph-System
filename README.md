# Visual-Knowledge-Graph-System
Easy visual knowledge graph system with G6, Neo4j database and Nodejs.


Main components:


G6:https://github.com/antvis/g6


autocomplete:https://github.com/devbridge/jQuery-Autocomplete


node-neo4j:https://github.com/philippkueng/node-neo4j


Neo4j:https://github.com/neo4j/neo4j


### Description

  
  可视化知识图谱系统是一个超轻量级但完整的web系统，neo4j作为图数据库存储节点和关系，使用Nodejs启动服务。


  本系统使用的数据是Neo4j自带的示例数据。

### Functions

  现有的功能很有限，他们包括：

- 按照名称搜索实体: 带有自动补全搜索框，通过搜索展示目标节点。
- 按照实体类型展示实体节点: 自动从数据库中获取全部的实体类型，点击按钮，展示符合条件的部分实体。
- 按照实体类型展示关系: 点击按钮，展示符合条件的部分实体及其相连接的关系。
- 按照关系标签展示关系: 自动从数据库中获取全部的关系标签，点击按钮，展示符合条件的关系。
- 钻取实体: 双击实体节点，将展开与其步长为1的相邻节点。
- 展示实体属性:将鼠标移动到实体上，会展示出实体对应的属性。
  
  <img src="https://github.com/island99/Visual-Knowledge-Graph-System/blob/main/gif/search.gif" width=800>
  <img src="https://github.com/island99/Visual-Knowledge-Graph-System/blob/main/gif/properties.gif" width=800>
  
### Usage

- Database

  为了更好的复现本系统中的数据，新建一个Neo4j数据库，利用tutorials的demo中的Cypher语句创建数据。
```
:play movie-graph
```
  选择第二页中的Cypher语句，完成demo数据的创建。

<img src="https://github.com/island99/Visual-Knowledge-Graph-System/blob/main/gif/datademo.png" width=800>

- Login

  backend/config.json 文件设定了neo4j数据库的登录名和密码，第一次运行需要进行配置。

```
    "username": "neo4j",
    "password": "000000"
```
- install

```
  npm install 
```

- Run
```
  node .\backend\index.js
  http-server.cmd
```
  
  如有问题和建议欢迎通过Issues与我交流！
