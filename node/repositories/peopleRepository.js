module.exports = function () {
    const mysql = require('mysql')
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }

    this.addPerson = function (personName) {
        let connection = mysql.createConnection(config);
        let sql = `INSERT INTO people(name) values('${personName}')`;
        connection.query(sql);
        connection.end();
    }
    
    this.getPeople = function (resultCallback) {
        let people = [];
        let connection = mysql.createConnection(config);
        let sql = `SELECT * FROM people`;
        connection.query(sql, (err, res) => {
            if (err) throw err;
            
            console.log(`1. Query result: ${res}`);

            resultCallback(res);
        });
        connection.end();
    
        return people;
    }
}