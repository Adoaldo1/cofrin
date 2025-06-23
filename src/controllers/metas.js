const supabase = require('../services/supabase');
const { resposta_erro, resposta_sucesso } = require('../utils/helpers');

class MetasController {
  async criar_meta(req, res) {
    try {
      res.status(201).json(resposta_sucesso(null, 'Endpoint de criar meta em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao criar meta:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async listar_metas(req, res) {
    try {
      res.status(200).json(resposta_sucesso([], 'Endpoint de listar metas em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao listar metas:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async obter_meta(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de obter meta ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao obter meta:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async editar_meta(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de editar meta ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao editar meta:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async deletar_meta(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(resposta_sucesso(null, `Endpoint de deletar meta ${id} em desenvolvimento`));
    } catch (error) {
      console.error('Erro ao deletar meta:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async consultar_progresso_metas(req, res) {
    try {
      res.status(200).json(resposta_sucesso([], 'Endpoint de consultar progresso das metas em desenvolvimento'));
    } catch (error) {
      console.error('Erro ao consultar progresso das metas:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }
}

module.exports = new MetasController(); 