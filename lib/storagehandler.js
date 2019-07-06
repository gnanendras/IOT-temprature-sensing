'use strict' 
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.db');
class DB {
  create() {
    db.serialize(function () {
      db.run("CREATE TABLE if not exists Messages (data TEXT,messageId TEXT,userId TEXT, datetime TEXT, isack BOOLEAN)", function (err, row) {
      
        console.log('Database created');
      });
    }); 
    //this.insert_twin();
  }

  update() {
    db.serialize(function () {
      db.run("UPDATE msgs where info = 5", function (err, rows) {
        console.log(err);
      });
    });
  }

  insert(data) {
    console.log("Insert:" + data);
    db.serialize(function () {
      db.run("INSERT into Messages (data,messageId,userId,datetime,isack) VALUES (?,?,?,?,?)", [data.data, data.messageId, data.userId, data.datetime, false], function (err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
    });
  }

  retrive() {
    db.serialize(function () {
      db.run("SELECT * from Messages where isack =false", function (err, rows) {
        return rows;
        //rows contain values while errors, well you can figure out.
      });
    });
  }

  delete(id) {
    db.serialize(function () {

      var deletecmd = "DELETE FROM Messages WHERE messageId = " + '"' + id.toString() + '"';
      console.log(deletecmd);
      db.run(deletecmd, function (err, rows) {
        console.log("Message deleted:" + id);
        // console.log(err);
      });

    });
  }
}
module.exports = DB;

