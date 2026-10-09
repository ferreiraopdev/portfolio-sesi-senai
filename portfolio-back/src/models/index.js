import { atividades } from "./atividadesModel.js";
import { pessoal } from "./pessoalModel.js";
import { usuario } from "./usuarioModel.js";

usuario.hasOne(pessoal, {
    foreignKey: 'id_usuario'
});

pessoal.belongsTo(usuario, {
    foreignKey: 'id_usuario'
});

usuario.hasMany(atividades, {
    foreignKey: 'id_usuario'
});

atividades.belongsTo(usuario, {
    foreignKey: 'id_usuario'
});

export { atividades, pessoal, usuario };