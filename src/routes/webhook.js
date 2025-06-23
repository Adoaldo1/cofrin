const express = require('express');
const router = express.Router();
const webhook_controller = require('../controllers/webhook');

// Endpoint para receber mensagens do WhatsApp
router.post('/', webhook_controller.processar_mensagem);

// Endpoint para verificação do webhook (se necessário)
router.get('/', webhook_controller.verificar_webhook);

module.exports = router; 