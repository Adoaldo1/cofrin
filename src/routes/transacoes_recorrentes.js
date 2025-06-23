const express = require('express');
const router = express.Router();
const transacoes_recorrentes_controller = require('../controllers/transacoes_recorrentes');

// Criar nova transação recorrente
router.post('/', transacoes_recorrentes_controller.criar_transacao_recorrente);

// Listar transações recorrentes
router.get('/', transacoes_recorrentes_controller.listar_transacoes_recorrentes);

// Processar transações recorrentes (executar cron)
router.post('/processar', transacoes_recorrentes_controller.processar_recorrencias);

// Editar transação recorrente
router.put('/:id', transacoes_recorrentes_controller.editar_transacao_recorrente);

// Deletar transação recorrente
router.delete('/:id', transacoes_recorrentes_controller.deletar_transacao_recorrente);

module.exports = router; 