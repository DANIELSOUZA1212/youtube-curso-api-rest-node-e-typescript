import { Router } from 'express';
import { criarSolicitacao } from '../controllers/solicitacoesController';

const router = Router();

router.post('/solicitacoes', criarSolicitacao);

export default router;
