const express = require('express');
const router = express.Router();
const relatorios_controller = require('../controllers/relatorios');

// Relatório mensal
router.get('/mensal', relatorios_controller.relatorio_mensal);

// Relatório por período
router.get('/periodo', relatorios_controller.relatorio_periodo);

// Relatório por categoria
router.get('/categoria', relatorios_controller.relatorio_categoria);

// Relatório de cartões
router.get('/cartoes', relatorios_controller.relatorio_cartoes);

module.exports = router; 