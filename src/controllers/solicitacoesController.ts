import { Request, Response } from 'express';
import { SolicitacaoService } from '../../src/shared/services/SolicitacaoService';

export const criarSolicitacao = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await SolicitacaoService.criar(data);
    return res.status(201).json(result);
  } catch (error: any) {
    console.error('Erro ao criar solicitação:', error.message || error);
    return res.status(500).json({ error: 'Erro ao criar solicitação' });
  }
};

