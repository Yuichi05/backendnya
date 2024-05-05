import {Sequelize} from "sequelize";

const db = new Sequelize('upload_db','Yusuf','12345',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;