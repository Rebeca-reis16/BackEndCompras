const express = require('express');
const controllerProd = require('./controllers/controllerProd');
const controllerComp = require('./controllers/controllerComp');
const controllerEstoque = require('./controllers/controllerEstoque');

const router = express.Router();

router.get('/produtos', controllerProd.prodsGeral);
router.post('/produtos',controllerProd.createProd);
router.put('/produtos/:pro_cod', controllerProd.updateProd);
router.delete('/produtos/:pro_cod', controllerProd.deleteProd);


// Rota compras
router.post('/compra',controllerComp.createComp);
router.get('/compra', controllerComp.updateCompra);
router.delete('/compracod/:codcomp', controllerComp.deleteCompra);



// Rotas do estoque
router.get('/estoque', controllerEstoque.estoqueGeral);
// Rota para adicionar um novo item ao estoque
router.post('/estoque', controllerEstoque.createEstoque);
// Rota para atualizar um item no estoque
router.put('/estoque/:est_cod', controllerEstoque.updateEstoque);
// Rota para deletar um item do estoque
router.delete('/estoque/:est_cod', controllerEstoque.deleteEstoque);

module.exports = router;