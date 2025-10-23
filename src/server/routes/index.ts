/* eslint-disable linebreak-style */
import { Router } from 'express';

import { MonitoramentoController, PessoasController, UsuariosController } from './../controllers';
import { ensureAuthenticated } from '../shared/middleware';



const router = Router();



router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get('/monitoramento', ensureAuthenticated, MonitoramentoController.getAllValidation, MonitoramentoController.getAll);
router.post('/monitoramento', ensureAuthenticated, MonitoramentoController.createValidation, MonitoramentoController.create);
router.get('/monitoramento/:id', ensureAuthenticated, MonitoramentoController.getByIdValidation, MonitoramentoController.getById);
router.put('/monitoramento/:id', ensureAuthenticated, MonitoramentoController.updateByIdValidation, MonitoramentoController.updateById);
router.delete('/monitoramento/:id', ensureAuthenticated, MonitoramentoController.deleteByIdValidation, MonitoramentoController.deleteById);

router.get('/pessoas', ensureAuthenticated, PessoasController.getAllValidation, PessoasController.getAll);
router.post('/pessoas', ensureAuthenticated, PessoasController.createValidation, PessoasController.create);
router.get('/pessoas/:id', ensureAuthenticated, PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', ensureAuthenticated, PessoasController.updateByIdValidation, PessoasController.updateById);
router.delete('/pessoas/:id', ensureAuthenticated, PessoasController.deleteByIdValidation, PessoasController.deleteById);

router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);



export { router };
