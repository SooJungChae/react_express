var express = require('express');
var router = express.Router();
var sql = require('mssql');
var db_config = require('../config/db_config');

const config = {
    server   : db_config.server,
    port     : db_config.port,
    user     : db_config.user,
    password : db_config.password,
    database : db_config.database
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    const pool = new sql.ConnectionPool(config, err => {
        pool.request()
            .query(
                'SELECT AgentCode ' +
                ', AgentSeqNo ' +
                'FROM AgentInfo',
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.send('pong');
                    }
                    console.log(result);
                    return res.send(JSON.stringify(result.recordsets[0]));
                })
    });
});

module.exports = router;
