const orm = require('./../config/orm');


var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    create: function(val, cb) {
        orm.create('burgers', 'burger_name', val, function(res) {
            cb(res);
        });
    },
    update: function(col, val, condition, cb) {
        orm.update('burgers', col, val, condition, function(res) {
            cb(res);
        });
    } 
}

module.exports = burger;