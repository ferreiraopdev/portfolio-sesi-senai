import { ValidationError, UniqueConstraintError } from "sequelize";

export const tratarErro = (error, res) => {
    if (error instanceof UniqueConstraintError) {
        return res.status(409).json({
            message: error.errors[0].message
        })
    }

    if (error instanceof ValidationError) {
        return res.status(400).json({
            message: error.errors[0].message
        })
    }

    console.log(error)

    return res.status(500).json({ message: "Erro interno do servidor" })
}