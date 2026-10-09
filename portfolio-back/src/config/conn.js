import {Sequelize} from 'sequelize';
import path from 'path'

export const conn = new Sequelize({
    dialect: 'sqlite',
    storage: "./../database/data.db"
});

console.log("-> O BANCO ESTÁ REALMENTE AQUI:", path.resolve(conn.options.storage));