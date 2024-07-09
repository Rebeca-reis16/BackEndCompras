const knex = require('../database/index');

module.exports ={

    async createComp(req, res){
        const {comp_cod}  = req.body;
        const { pro_cod }  = req.body;
        const { comp_qtda }  = req.body;
        const { comp_fabricante }  = req.body;
        const { comp_nome }  = req.body;
        const { est_cod }  = req.body;
        const { comp_preco }  = req.body;

        if (comp_cod != '' && pro_cod !=''){
            repsclientes = await knex('estoque')
                            .where('est_cod','=',est_cod);
        }else{
            return res.status(400).send(
                {
                    msg:'Código do estoque ou do produto inexistente - antes da consulta  de produtos!!!!'
                }
            ); 
        }

        if (repsclientes != ''){
            const resProduto = await knex('produtos')
                    .where('pro_cod', '=', pro_cod);
            
            if (resProduto != ''){
                await knex('compra').insert({
                    comp_cod,
                    pro_cod,
                    comp_qtda,
                    comp_preco,
                    comp_fabricante,
                    comp_nome,
                });
                return res.status(201).send(
                    {
                        msg:'Cadastro efetuado com sucesso !!!!'
                    }
                );
            }else{
                return res.status(400).send(
                    {
                        msg:'Código do produto inválido !!!!'
                    }
                );
            }
        }else{
            return res.status(400).send(
                {
                    msg:'Código do produto inexistente - Após a consulta!!!!'
                }
            );
        }

      
    },
    // Atualizar uma compra
    async updateCompra(req, res){
        const { comp_cod } = req.params;
        const { comp_descri} = req.body;
        const {comp_fabricante} = req.body;
        const {comp_qtda} = req.body;
        const {comp_preco} =  req.body;
        const {comp_data} = req.body;
        const {comp_pro } = req.body;

        if (!comp_cod || !comp_descri || !comp_fabricante || !comp_qtda || !comp_preco || !comp_data || !comp_pro) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            await knex('compra').update({
                comp_descri,
                comp_fabricante,
                comp_qtda,
                comp_preco,
                comp_data,
                comp_pro
            }).where({ comp_cod });

            return res.status(200).json({ msg: 'Compra atualizada com sucesso !!!!' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar compra' });
        }
    },


async deleteCompra(req, res){
    const { comp_cod } = req.params;

    await knex('compra')
          .where({ comp_cod })
          .del();
    
    return res.status(201).send(
            {
                msg:'Compra deletado com sucesso !!!!'
            }
        );
 }
}