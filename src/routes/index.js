import express from 'express';
import transacoes_routes from './transacoes.js';

const router = express.Router();

// Rota principal de teste
router.get('/', (req, res) => {
  res.send('API Cofrin rodando');
});

// Importar rotas de transações
router.use('/', transacoes_routes);

export default router; 