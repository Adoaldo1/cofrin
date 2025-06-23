const express = require('express');
const router = express.Router();
const metodos_pagamento_controller = require('../controllers/metodos_pagamento');

// Criar novo método de pagamento
router.post('/', metodos_pagamento_controller.criar_metodo_pagamento);

// Listar métodos de pagamento
router.get('/', metodos_pagamento_controller.listar_metodos_pagamento);

// Obter método de pagamento por ID
router.get('/:id', metodos_pagamento_controller.obter_metodo_pagamento);

// Editar método de pagamento
router.put('/:id', metodos_pagamento_controller.editar_metodo_pagamento);

// Deletar método de pagamento
router.delete('/:id', metodos_pagamento_controller.deletar_metodo_pagamento);

module.exports = router; 