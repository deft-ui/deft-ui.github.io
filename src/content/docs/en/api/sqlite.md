---
title:  Sqlite
---
Sqlite用于本地储存/查询结构化数据。

**使用**

```javascript
// 打开/创建数据库文件
const conn = await Sqlite.open("/path/to/dbfile");
// 创建数据表
await conn.execute('CREATE TABLE IF NOT EXISTS "user" ("id" INTEGER, "name" TEXT)', []);
// 插入数据
await conn.execute("insert into user(id, name) values(?,?)", [1, "Tom"]);
// 查询数据
const rows = await conn.query(`select * from user`);
```