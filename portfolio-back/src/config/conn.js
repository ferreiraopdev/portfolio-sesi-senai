import {Sequelize} from 'sequelize';

export const conn = new Sequelize('portfolio', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
});