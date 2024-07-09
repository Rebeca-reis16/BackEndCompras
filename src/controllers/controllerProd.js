const knex = require('../database/index');

module.exports = {

    async prodsGeral(req, res){
        const result = await knex('produtos');
        return res.json(result);
    },


    
    async createProd(req, res){
        const {pro_nome}  = req.body;
        const { pro_descri }  = req.body;
        const { pro_fabricante }  = req.body;
        const { pro_qtda }  = req.body;
        const { pro_preco }  = req.body;
        const { pro_custo }  = req.body;
        await knex('produtos').insert({
            pro_nome,
            pro_descri,
            pro_fabricante,
            pro_qtda,
            pro_preco,
            pro_custo
        });
        return res.status(201).send(
            {
                msg:'Cadastro efetuado com sucesso !!!!'
            }
        );
    },

    async updateProd(req, res){
        const { pro_cod } = req.params;
        const {pro_nome}  = req.body;
        const { pro_descri }  = req.body;
        const { pro_fabricante }  = req.body;
        const { pro_qtda }  = req.body;
        const { pro_preco }  = req.body;
        const { pro_custo }  = req.body;

        await knex('produtos').update({
            pro_nome,
            pro_descri,
            pro_fabricante,
            pro_qtda,
            pro_preco,
            pro_custo
        }).where({ pro_cod });
        return res.status(201).send(
            {
                msg:'Atualização efetuada com sucesso !!!!'
            }
        );
    },

    async deleteProd(req, res){
        const { pro_cod } = req.params;

        await knex('produtos')
              .where({ pro_cod })
              .del();
        
        return res.status(201).send(
                {
                    msg:'Registro deletado com sucesso !!!!'
                }
            );
     }
    
}