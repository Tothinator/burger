var connection = require('./connection');

var orm = {
    all: function(table, cb) {
        var queryString = 'SELECT * FROM ??;'

        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, col, colValue, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?);';

        connection.query(queryString, [table, col, colValue], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function(table, colToUpdate, colValue, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE " + condition +';';

        console.log("UPDATE " + table + " SET " + colToUpdate + " = " + colValue + " WHERE " + condition + ";");

        connection.query(queryString, [table, colToUpdate, colValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;