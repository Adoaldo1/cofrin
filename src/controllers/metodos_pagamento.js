const supabase = require('../services/supabase');
const { resposta_erro, resposta_sucesso } = require('../utils/helpers');

class MetodosPagamentoController {
  async criar_metodo_pagamento(req, res) {
    try {
      res.status(201).json(resposta_sucesso(null, 'Endpoint de criar método de pagamento em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao criar método de pagamento:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async listar_metodos_pagamento(req, res) {
    try {
      res.status(200).json(resposta_sucesso([], 'Endpoint de listar métodos de pagamento em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao listar métodos de pagamento:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async obter_metodo_pagamento(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de obter método de pagamento ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao obter método de pagamento:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async editar_metodo_pagamento(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de editar método de pagamento ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao editar método de pagamento:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async deletar_metodo_pagamento(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de deletar método de pagamento ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao deletar método de pagamento:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }
}

module.exports = new MetodosPagamentoController(); 