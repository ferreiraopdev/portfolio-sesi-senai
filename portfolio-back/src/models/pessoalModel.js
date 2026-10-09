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
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                },
                notEmpty: {
                    msg: "O campo experiências é obrigatório"
                }
            }
        },
        conhecimentos: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                },
                notEmpty: {
                    msg: "O campo conhecimentos é obrigatório"
                }
            }
        },
        aprendizado_academico: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                },
                notEmpty: {
                    msg: "O campo aprendizado acadêmico é obrigatório"
                }
            }
        },
        melhorias: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                },
                notEmpty: {
                    msg: "O campo melhorias é obrigatório"
                }
            }
        },
        aplicacao_pratica: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255]
                },
                notEmpty: {
                    msg: "O campo de aplicação prática é obrigatório"
                }
            }
        }
    },
    {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)