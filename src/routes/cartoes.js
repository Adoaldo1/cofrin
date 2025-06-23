const express = require('express');
const router = express.Router();
const cartoes_controller = require('../controllers/cartoes');

// Criar novo cartão
router.post('/', cartoes_controller.criar_cartao);

// Listar cartões
router.get('/', cartoes_controller.listar_cartoes);

// Obter cartão por ID
router.get('/:id', cartoes_controller.obter_cartao);

// Editar cartão
router.put('/:id', cartoes_controller.editar_cartao);

// Deletar cartão
router.delete('/:id', cartoes_controller.deletar_cartao);

module.exports = router; 