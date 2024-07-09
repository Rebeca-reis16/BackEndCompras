const knex = require('../database/index');

module.exports = {

    // Listar todos os itens no estoque
    async estoqueGeral(req, res){
        const result = await knex('estoque');
        return res.json(result);
    },

    // Adicionar um novo item ao estoque
    async createEstoque(req, res){
        const { est_nome }  = req.body;
        const { est_fabricante }  = req.body;
        const { est_data}  = req.body;
        const { est_qtda }  = req.body;
        const { est_preco }  = req.body;
        const { est_cod }  = req.body;
        await knex('estoque').insert({
            est_nome,
            est_data,
            est_fabricante,
            est_qtda,
            est_preco,
            est_cod
        });
        return res.status(201).send(
            {
                msg:'Item adicionado ao estoque com sucesso !!!!'
            }
        );
    },

    // Atualizar um item no estoque
    async updateEstoque(req, res){
        const { est_cod } = req.params;
        const { est_nome }  = req.body;
        const { est_data }  = req.body;
        const { est_fabricante }  = req.body;
        const { est_qtda }  = req.body;
        const { est_preco }  = req.body;
        

        await knex('estoque').update({
            est_nome,
            est_data,
            est_fabricante,
            est_qtda,
            est_preco,
            est_data
        }).where({ est_cod });
        return res.status(201).send(
            {
                msg:'Item do estoque atualizado com sucesso !!!!'
            }
        );
    },

    // Deletar um item do estoque
    async deleteEstoque(req, res){
        const { est_cod } = req.params;

        await knex('estoque')
              .where({ est_cod })
              .del();
        
        return res.status(201).send(
                {
                    msg:'Item do estoque deletado com sucesso !!!!'
                }
            );
     }
}