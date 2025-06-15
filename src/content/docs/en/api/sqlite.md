---
title:  Sqlite
---
Sqlite used to store/query structured data locally.

**Usage**

```javascript
// open/create database file
const conn = await Sqlite.open("/path/to/dbfile");
// create table
await conn.execute('CREATE TABLE IF NOT EXISTS "user" ("id" INTEGER, "name" TEXT)', []);
// insert data
await conn.execute("insert into user(id, name) values(?,?)", [1, "Tom"]);
// query data
const rows = await conn.query(`select * from user`);
```