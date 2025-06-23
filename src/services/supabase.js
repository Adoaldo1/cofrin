import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variáveis de ambiente SUPABASE_URL e SUPABASE_KEY são obrigatórias');
}

export const supabase = createClient(supabaseUrl, supabaseKey); 

const testarConexao = async () => {
  const { data, error } = await supabase.from('usuarios').select('*');
  
  if (error) {
    console.error('❌ Erro na conexão com Supabase:', error);
  } else {
    console.log('✅ Conexão Supabase funcionando. Dados da tabela usuarios:', data);
  }
};

testarConexao();
