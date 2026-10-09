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
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo título é obrigatório!"
                }
            }
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo descrição é obrigatório!"
                },
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                }
            }
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reflexao: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo reflexão é obrigatório!"
                },
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                }
            }
        },
        auto_avaliacao: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo de auto avaliação é obrigatório!"
                },
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                }
            }
        },
        conexoes: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo de conexões é obrigatório!"
                },
                len: {
                    args: [3, 255],
                    msg: "Deve possui entre 3 a 255 caracteres"
                }
            }
        },
        instituicao: {
            type: DataTypes.ENUM("sesi", "senai"),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo instituição é obrigatório!"
                }
            }
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo data é obrigatório!"
                }
            }
        },
        categoria : {
            type: DataTypes.ENUM("fullstack", "frontend", "backend", "matematica", "natureza", "humanas", "linguagens"),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O campo categoria é obrigatório!"
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