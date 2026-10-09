import { conn } from './../config/conn.js'
import { DataTypes } from 'sequelize'

export const pessoal = conn.define('pessoal',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_usuario: {
            type: DataTypes.UUID,
            allowNull: false
        },
        experiencias: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        conhecimentos: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        aprendizado_academico: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        melhorias: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        aplicacao_pratica: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)