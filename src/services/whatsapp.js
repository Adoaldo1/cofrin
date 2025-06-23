const axios = require('axios');
require('dotenv').config();

class WhatsAppService {
  constructor() {
    this.base_url = process.env.WHATSAPP_URL;
    this.instance_id = process.env.WHATSAPP_INSTANCE_ID;
    this.token = process.env.WHATSAPP_TOKEN;
  }

  async enviar_mensagem(numero, mensagem) {
    try {
      const payload = {
        number: numero,
        message: mensagem
      };

      const config = {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post(
        `${this.base_url}/instances/${this.instance_id}/messages/text`,
        payload,
        config
      );

      return response.data;
    } catch (error) {
      console.error('Erro ao enviar mensagem WhatsApp:', error);
      throw new Error('Falha ao enviar mensagem via WhatsApp');
    }
  }

  async processar_webhook_mensagem(dados_webhook) {
    // Aqui será implementada a lógica para processar mensagens recebidas
    console.log('Processando mensagem do webhook:', dados_webhook);
    return dados_webhook;
  }
}

module.exports = new WhatsAppService(); 