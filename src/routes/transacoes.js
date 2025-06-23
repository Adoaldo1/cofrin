import express from 'express';
import transacoes_controller from '../controllers/transacoes.js';

const router = express.Router();

// POST /transacao → criar uma transação
router.post('/transacao', transacoes_controller.criar_transacao);

// GET /transacoes → listar todas as transações do usuário
router.get('/transacoes', transacoes_controller.listar_transacoes);

// PUT /transacao/:id → editar uma transação pelo ID
router.put('/transacao/:id', transacoes_controller.editar_transacao);

// DELETE /transacao/:id → deletar uma transação pelo ID
router.delete('/transacao/:id', transacoes_controller.deletar_transacao);

export default router; 