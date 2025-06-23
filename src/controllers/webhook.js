const whatsapp_service = require('../services/whatsapp');
const { resposta_erro, resposta_sucesso } = require('../utils/helpers');

class WebhookController {
  async processar_mensagem(req, res) {
    try {
      console.log('Webhook recebido:', JSON.stringify(req.body, null, 2));
      
      // Aqui será implementada a lógica para interpretar e processar as mensagens
      const dados_webhook = req.body;
      
      // Verificar se é uma mensagem válida
      if (!dados_webhook || !dados_webhook.messages) {
        return res.status(200).json(resposta_sucesso(null, 'Webhook processado - sem mensagens'));
      }

      // Processar cada mensagem recebida
      for (const mensagem of dados_webhook.messages) {
        await this.processar_mensagem_individual(mensagem);
      }

      res.status(200).json(resposta_sucesso(null, 'Mensagens processadas com sucesso'));
    } catch (error) {
      console.error('Erro ao processar webhook:', error);
      res.status(500).json(resposta_erro('Erro interno do servidor'));
    }
  }

  async processar_mensagem_individual(mensagem) {
    try {
      const numero_usuario = mensagem.from;
      const texto_mensagem = mensagem.body?.toLowerCase() || '';
      
      console.log(`Processando mensagem de ${numero_usuario}: ${texto_mensagem}`);

      // Aqui será implementada a lógica de interpretação das mensagens
      // Por enquanto, apenas logamos e enviamos uma resposta básica
      
      if (texto_mensagem.includes('ajuda') || texto_mensagem.includes('help')) {
        await this.enviar_menu_ajuda(numero_usuario);
      } else {
        await whatsapp_service.enviar_mensagem(
          numero_usuario,
          'Mensagem recebida! Em breve implementaremos o processamento completo.'
        );
      }
    } catch (error) {
      console.error('Erro ao processar mensagem individual:', error);
    }
  }

  async enviar_menu_ajuda(numero_usuario) {
    const menu_ajuda = `
🏦 *Cofrin - Controle Financeiro*

Comandos disponíveis:
💰 Para adicionar despesa: "gasto 50 mercado"
💳 Para compra no cartão: "cartao 100 restaurante"
📊 Para ver relatório: "relatorio"
🎯 Para ver metas: "metas"
❓ Para ajuda: "ajuda"

_Em breve mais funcionalidades!_
    `.trim();

    try {
      await whatsapp_service.enviar_mensagem(numero_usuario, menu_ajuda);
    } catch (error) {
      console.error('Erro ao enviar menu de ajuda:', error);
    }
  }

  async verificar_webhook(req, res) {
    // Endpoint para verificação do webhook (alguns provedores exigem)
    const token_verificacao = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    
    // Aqui você pode adicionar lógica de verificação se necessário
    if (challenge) {
      res.status(200).send(challenge);
    } else {
      res.status(200).json(resposta_sucesso(null, 'Webhook ativo'));
    }
  }
}

module.exports = new WebhookController(); 