const casosRepository = require("../repositories/casosRepository");

//função para pegar todos os casos 
function getAllCasos(req, res) {
    const casos = casosRepository.findAll();
    res.status(200).json(casos);
}


function createCaso(req, res){
    const { id, titulo, descricao, status, agente_id } = req.body;
    
    if (!id || !titulo || !descricao || !status || !agente_id) {
        return res.status(400).json({ Message: "Todos os campos devem ser preenchidos."});
    }

    const statusValido = ["aberto", "solucionado", "arquivado"];
    if (!statusValido.includes(status)) {
        return res.status(400).json({
            Message: "Status inválido. Use 'aberto' ou 'solucionado' ou 'arquivado'."
        });
    }


    const casoNovo = { id, titulo, descricao, status, agente_id };
    const casoCriado = casosRepository.create(casoNovo);

    return res.status(201).json(casoCriado);
}


module.exports = {
    getAllCasos,
    createCaso
};