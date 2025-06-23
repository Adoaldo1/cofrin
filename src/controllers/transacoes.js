import { supabase } from '../services/supabase.js';

class TransacoesController {
  // Criar nova transação
  async criar_transacao(req, res) {
    try {
      const {
        usuario_id,
        tipo,
        valor,
        descricao,
        data,
        recorrente = false
      } = req.body;

      // Validações básicas
      if (!usuario_id || !tipo || !valor || !descricao || !data) {
        return res.status(400).json({
          erro: 'Campos obrigatórios: usuario_id, tipo, valor, descricao, data'
        });
      }

      if (!['entrada', 'saida', 'cartao'].includes(tipo)) {
        return res.status(400).json({
          erro: 'Tipo deve ser: entrada, saida ou cartao'
        });
      }

      const { data: transacao, error } = await supabase
        .from('transacoes')
        .insert([
          {
            usuario_id,
            tipo,
            valor: parseFloat(valor),
            descricao,
            data,
            recorrente
          }
        ])
        .select();

      if (error) {
        console.error('Erro ao criar transação:', error);
        console.error('Detalhes do erro:', error.details);
        console.error('Código do erro:', error.code);
        console.error('Mensagem:', error.message);
        return res.status(500).json({ erro: `Erro ao criar transação: ${error.message}` });
      }

      res.status(201).json({
        status: 'ok',
        data: transacao[0]
      });

    } catch (error) {
      console.error('Erro interno ao criar transação:', error);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  }

  // Listar todas as transações do usuário
  async listar_transacoes(req, res) {
    try {
      const { usuario_id } = req.query;

      if (!usuario_id) {
        return res.status(400).json({
          erro: 'usuario_id é obrigatório na query'
        });
      }

      const { data: transacoes, error } = await supabase
        .from('transacoes')
        .select(`
          *,
          *
        `)
        .eq('usuario_id', usuario_id)
        .order('data', { ascending: false });

      if (error) {
        console.error('Erro ao listar transações:', error);
        return res.status(500).json({ erro: 'Erro ao listar transações' });
      }

      res.status(200).json({
        status: 'ok',
        data: transacoes
      });

    } catch (error) {
      console.error('Erro interno ao listar transações:', error);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  }

  // Editar transação existente
  async editar_transacao(req, res) {
    try {
      const { id } = req.params;
              const {
          usuario_id,
          tipo,
          valor,
          descricao,
          data,
          recorrente
        } = req.body;

      if (!usuario_id) {
        return res.status(400).json({
          erro: 'usuario_id é obrigatório'
        });
      }

      if (tipo && !['entrada', 'saida', 'cartao'].includes(tipo)) {
        return res.status(400).json({
          erro: 'Tipo deve ser: entrada, saida ou cartao'
        });
      }

      // Verificar se a transação existe e pertence ao usuário
      const { data: transacao_existente, error: erro_busca } = await supabase
        .from('transacoes')
        .select('id')
        .eq('id', id)
        .eq('usuario_id', usuario_id)
        .single();

      if (erro_busca || !transacao_existente) {
        return res.status(404).json({
          erro: 'Transação não encontrada ou não pertence ao usuário'
        });
      }

              // Preparar dados para atualização (apenas campos fornecidos)
        const dados_atualizacao = {};
        if (tipo !== undefined) dados_atualizacao.tipo = tipo;
        if (valor !== undefined) dados_atualizacao.valor = parseFloat(valor);
        if (descricao !== undefined) dados_atualizacao.descricao = descricao;
        if (data !== undefined) dados_atualizacao.data = data;
        if (recorrente !== undefined) dados_atualizacao.recorrente = recorrente;

      const { data: transacao_atualizada, error } = await supabase
        .from('transacoes')
        .update(dados_atualizacao)
        .eq('id', id)
        .eq('usuario_id', usuario_id)
        .select();

      if (error) {
        console.error('Erro ao editar transação:', error);
        return res.status(500).json({ erro: 'Erro ao editar transação' });
      }

      res.status(200).json({
        status: 'ok',
        data: transacao_atualizada[0]
      });

    } catch (error) {
      console.error('Erro interno ao editar transação:', error);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  }

  // Deletar transação
  async deletar_transacao(req, res) {
    try {
      const { id } = req.params;
      const { usuario_id } = req.body;

      if (!usuario_id) {
        return res.status(400).json({
          erro: 'usuario_id é obrigatório no body'
        });
      }

      // Verificar se a transação existe e pertence ao usuário
      const { data: transacao_existente, error: erro_busca } = await supabase
        .from('transacoes')
        .select('id, descricao')
        .eq('id', id)
        .eq('usuario_id', usuario_id)
        .single();

      if (erro_busca || !transacao_existente) {
        return res.status(404).json({
          erro: 'Transação não encontrada ou não pertence ao usuário'
        });
      }

      const { error } = await supabase
        .from('transacoes')
        .delete()
        .eq('id', id)
        .eq('usuario_id', usuario_id);

      if (error) {
        console.error('Erro ao deletar transação:', error);
        return res.status(500).json({ erro: 'Erro ao deletar transação' });
      }

      res.status(200).json({
        status: 'ok',
        data: { 
          id: parseInt(id),
          descricao: transacao_existente.descricao,
          deletada: true 
        }
      });

    } catch (error) {
      console.error('Erro interno ao deletar transação:', error);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  }
}

export default new TransacoesController(); 