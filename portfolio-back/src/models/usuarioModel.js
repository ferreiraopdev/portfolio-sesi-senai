import { conn } from './../config/conn.js'
import { DataTypes } from 'sequelize'

export const usuario = conn.define('usuario',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobre_mim: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)