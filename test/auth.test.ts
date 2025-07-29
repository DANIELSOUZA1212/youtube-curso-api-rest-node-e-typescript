import express from 'express';
import { db } from '../src/database/connection';

const app = express();
app.use(express.json());

// Criar nova solicitação com itens
app.post('/solicitacoes', async (req, res) => {
  const { solicitante, datalan, hora, status, itens } = req.body;

  if (!solicitante || !datalan || !hora || !status || !Array.isArray(itens)) {
    return res.status(400).json({ error: 'Dados obrigatórios faltando' });
  }

  try {
    const [novaSolicitacao] = await db('solicitacao')
      .insert({ solicitante, datalan, hora, status })
      .returning('*');

    const itensFormatados = itens.map((item: any) => ({
      ...item,
      idsolicitacao: novaSolicitacao.idsolicitacao,
    }));

    await db('solicitacaoitems').insert(itensFormatados);

    return res.status(201).json({
      mensagem: 'Solicitação criada com sucesso',
      solicitacao: novaSolicitacao,
      itens: itensFormatados,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno ao criar solicitação' });
  }
});

// Buscar solicitações com seus itens
app.get('/solicitacoes', async (req, res) => {
  try {
    const solicitacoes = await db('solicitacao').select('*');

    const resultado = await Promise.all(
      solicitacoes.map(async (sol) => {
        const itens = await db('solicitacaoitems')
          .where('idsolicitacao', sol.idsolicitacao)
          .select('*');
        return { ...sol, itens };
      })
    );

    res.json(resultado);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar solicitações' });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
