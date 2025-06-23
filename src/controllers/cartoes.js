const supabase = require('../services/supabase');
const { resposta_erro, resposta_sucesso } = require('../utils/helpers');

class CartoesController {
  async criar_cartao(req, res) {
    try {
      res.status(201).json(resposta_sucesso(null, 'Endpoint de criar cartão em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao criar cartão:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async listar_cartoes(req, res) {
    try {
      res.status(200).json(resposta_sucesso([], 'Endpoint de listar cartões em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao listar cartões:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async obter_cartao(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de obter cartão ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao obter cartão:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async editar_cartao(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de editar cartão ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao editar cartão:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async deletar_cartao(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de deletar cartão ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao deletar cartão:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }
}

module.exports = new CartoesController(); 