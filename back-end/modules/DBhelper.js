var fs = require('fs');
var file = './dbFile/hibis.db';

//載入 sqlite3
var sqlite3 = require('sqlite3').verbose();
//new 一個 sqlite 的 database，檔案是 test.db
var db = new sqlite3.Database(file);

module.exports = {
  dbInit() {
    db.serialize(function () {
      //db.run 如果 Staff 資料表不存在，那就建立 Staff 資料表
      //User 關聯的ＴＡＢＬＥ
      db.run(
        'CREATE TABLE IF NOT EXISTS Profile (profileId INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL, address TEXT NOT NULL, email TEXT, phone INTEGER)'
      );
      db.run(
        'CREATE TABLE IF NOT EXISTS User (userId INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,account TEXT NOT NULL, password TEXT NOT NULL, salt TEXT NOT NULL,' +
          'profileId INTEGER,FOREIGN KEY (profileId) REFERENCES Profile(profileId) )'
      );
      db.run(
        'CREATE TABLE IF NOT EXISTS Store (storeId INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL, openTime DATETIME NOT NULL,closeTime DATETIME NOT NULL, address TEXT NOT NULL,' +
          'longitude REAL NOT NULL ,latitude REAL NOT NULL )'
      );
      db.run(
        'CREATE TABLE IF NOT EXISTS StoreImage (imgId INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,imgPath TEXT NOT NULL, storeId INTEGER NOT NULL,' +
          'FOREIGN KEY (storeId) REFERENCES Store(storeId) )'
      );
      db.run(
        'CREATE TABLE IF NOT EXISTS Product (productId INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL, price REAL NOT NULL, discount REAL NOT NULL,expiredTime DATETIME,quantity INTEGER NOT NULL,imgPath TEXT,description TEXT,storeId INTEGER NOT NULL,' +
          'FOREIGN KEY (storeId) REFERENCES Store(storeId) )'
      );

      // Store 關聯的Ｔable
      //   db.close();
      console.log('DB Init successfuly');
    });
  },
  createUser(account, password, salt, name, address, email, phone) {
    return new Promise((resolve, reject) => {
      db.serialize(async function () {
        try {
          const profileId = await insertProfile(name, address, email, phone);
          db.run(
            `INSERT INTO User(account,password,salt,profileId) VALUES(?,?,?,?)`,
            [account, password, salt, profileId],
            function (err) {
              if (err) {
                reject(err);
              }
              resolve({ userId: this.lastID, profileId: profileId, name: name });
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
    });
  },
};

function insertProfile(name, address, email, phone) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Profile(name,address,email,phone) VALUES(?,?,?,?)`,
      [name, address, email, phone],
      function (err) {
        if (err) {
          reject(err);
        }
        // get the last insert id
        resolve(this.lastID);

        console.log(`A row has been inserted ProfileId : ${this.lastID}`);
      }
    );
  });
}
