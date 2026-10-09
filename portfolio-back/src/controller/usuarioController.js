export const loginUsuario = (req, res) => {
    const { email, senha } = req.body
    if (!email || !senha) {
        return res.status(400).json({ message: "Todos os campos precisam estar preenchidos!"})
    }

    try {
        if (email !== "admin123@email.com" || senha !== "adm123@") {
            return res.status(400).json({ message: "credênciais incorretas!"})
        }
        res.status(201).json({message: 'logado com sucesso!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}