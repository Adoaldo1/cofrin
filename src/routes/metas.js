const express = require('express');
const router = express.Router();
const metas_controller = require('../controllers/metas');

// Criar nova meta
router.post('/', metas_controller.criar_meta);

// Listar metas
router.get('/', metas_controller.listar_metas);

// Obter meta por ID
router.get('/:id', metas_controller.obter_meta);

// Editar meta
router.put('/:id', metas_controller.editar_meta);

// Deletar meta
router.delete('/:id', metas_controller.deletar_meta);

// Consultar progresso das metas
router.get('/progresso/atual', metas_controller.consultar_progresso_metas);

module.exports = router; 