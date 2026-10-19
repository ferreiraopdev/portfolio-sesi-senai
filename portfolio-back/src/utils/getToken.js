export const getToken = (req, res) => {
    const authHeader = req.header.authorization
    const token = authHeader.split(" ")[1]
    return token
}