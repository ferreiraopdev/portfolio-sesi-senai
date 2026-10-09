import { conn } from './../config/conn.js'
import { DataTypes } from 'sequelize'

export const atividades = conn.define('atividades',
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
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reflexao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        auto_avaliacao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        conexoes: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        instituicao: {
            type: DataTypes.ENUM("sesi", "senai"),
            allowNull: false
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        categoria : {
            type: DataTypes.ENUM("fullstack", "frontend", "backend", "matematica", "natureza", "humanas", "linguagens"),
            allowNull: false
        }
    },
    {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)