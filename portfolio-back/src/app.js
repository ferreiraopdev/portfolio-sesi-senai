import cors from 'cors';
import express from 'express';

import rotasUsuario from './routes/usuarioRoute.js'
import rotasAtividades from './routes/atividadesRoute.js'

const app = express();

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));

app.use("/usuario", rotasUsuario)
app.use("/usuario/atividades", rotasAtividades)

app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    })
});

export default app;