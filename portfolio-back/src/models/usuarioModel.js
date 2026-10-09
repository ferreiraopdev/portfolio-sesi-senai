import { conn } from './../config/conn.js'
import { DataTypes } from 'sequelize'

export const usuario = conn.define('usuario',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    msg: "Deve possui entre 1 a 50 caracteres"
                },
                notEmpty: {
                    msg: "O campo nome é obrigatório"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo email é obrigatório"
                },
                isEmail: {
                    msg: "Informe um email válido!"
                }
            }
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobre_mim: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                },
                notEmpty: {
                    msg: "O campo sobre mim é obrigatório"
                }
            }
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 50],
                    msg: "Cargo deve possui entre 3 a 50 caracteres"
                },
                notEmpty: {
                    msg: "O campo cargo é obrigatório"
                }
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 100],
                    msg: "A senha deve possuir entre 8 a 100 caracteres"
                },
                notEmpty: {
                    msg: "O campo experiências é obrigatório"
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