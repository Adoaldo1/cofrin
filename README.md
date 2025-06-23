# Cofrin Backend

Backend para aplicativo de controle financeiro pessoal que funciona inteiramente via WhatsApp.

## 🚀 Tecnologias

- **Node.js** + **Express.js**
- **Supabase** (Banco de dados)
- **WhatsApp API** (Comunicação)
- **Node-cron** (Tarefas agendadas)

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`

4. Inicie o servidor:
```bash
npm run dev
```

## 🔧 Configuração

Certifique-se de configurar todas as variáveis no arquivo `.env`:

- `SUPABASE_URL`: URL do projeto Supabase
- `SUPABASE_KEY`: Chave de serviço do Supabase
- `WHATSAPP_URL`: URL da API do WhatsApp
- `WHATSAPP_INSTANCE_ID`: ID da instância do WhatsApp
- `WHATSAPP_TOKEN`: Token de autenticação do WhatsApp
- `PORT`: Porta do servidor (padrão: 3000)

## 📋 Endpoints Principais

- `POST /webhook` - Receber mensagens do WhatsApp
- `POST /transacao` - Criar transação
- `GET /transacoes` - Listar transações
- `POST /meta` - Criar meta
- `GET /relatorio/mensal` - Relatório mensal
- `GET /health` - Status da aplicação

## 🏗️ Estrutura do Projeto

```
src/
├── controllers/     # Lógica de negócios
├── routes/         # Definição de rotas
├── services/       # Conexões externas (Supabase, WhatsApp)
└── utils/          # Funções auxiliares
```

## 🔄 Funcionalidades

- ✅ Webhook para WhatsApp configurado
- ✅ Conexão com Supabase
- ✅ Estrutura básica de rotas
- 🔄 Controllers em desenvolvimento
- 🔄 Processamento de mensagens
- 🔄 Tarefas recorrentes (cron)

---

**Status**: �� Em desenvolvimento 