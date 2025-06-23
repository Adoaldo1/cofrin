const { format, parseISO, isValid } = require('date-fns');
const { ptBR } = require('date-fns/locale');

/**
 * Formatar valor monetário para exibição
 */
function formatar_valor(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

/**
 * Formatar data para exibição
 */
function formatar_data(data) {
  try {
    const data_obj = typeof data === 'string' ? parseISO(data) : data;
    if (!isValid(data_obj)) {
      return 'Data inválida';
    }
    return format(data_obj, 'dd/MM/yyyy', { locale: ptBR });
  } catch (error) {
    return 'Data inválida';
  }
}

/**
 * Formatar data e hora para exibição
 */
function formatar_data_hora(data) {
  try {
    const data_obj = typeof data === 'string' ? parseISO(data) : data;
    if (!isValid(data_obj)) {
      return 'Data inválida';
    }
    return format(data_obj, 'dd/MM/yyyy HH:mm', { locale: ptBR });
  } catch (error) {
    return 'Data inválida';
  }
}

/**
 * Validar se um número de telefone está no formato correto
 */
function validar_numero_telefone(numero) {
  // Remove caracteres não numéricos
  const numero_limpo = numero.replace(/\D/g, '');
  
  // Verifica se tem 11 dígitos (celular) ou 10 dígitos (fixo)
  return numero_limpo.length >= 10 && numero_limpo.length <= 11;
}

/**
 * Limpar número de telefone removendo caracteres especiais
 */
function limpar_numero_telefone(numero) {
  return numero.replace(/\D/g, '');
}

/**
 * Gerar resposta de erro padronizada
 */
function resposta_erro(mensagem, codigo = 400) {
  return {
    erro: true,
    mensagem,
    codigo
  };
}

/**
 * Gerar resposta de sucesso padronizada
 */
function resposta_sucesso(dados, mensagem = 'Operação realizada com sucesso') {
  return {
    sucesso: true,
    mensagem,
    dados
  };
}

module.exports = {
  formatar_valor,
  formatar_data,
  formatar_data_hora,
  validar_numero_telefone,
  limpar_numero_telefone,
  resposta_erro,
  resposta_sucesso
}; 