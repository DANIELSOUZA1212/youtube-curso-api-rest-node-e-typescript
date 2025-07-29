import { Request, Response } from 'express';
import { db } from '../database/connection';
import { PasswordCrypto } from '../utils/PassowordCrypto';

export const UserController = {
  async register(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
    }

    try {
      const exists = await db('usuarios').where({ email }).first();
      if (exists) {
        return res.status(409).json({ error: 'Email já cadastrado' });
      }

      const hashedPassword = await PasswordCrypto.hash(senha);

      const [usuario] = await db('usuarios')
        .insert({ nome, email, senha: hashedPassword })
        .returning(['id', 'nome', 'email']);

      return res.status(201).json(usuario);
    } catch (error: any) {

      
      console.error('Erro ao cadastrar usuário:', error.message);
      return res.status(400).json({ error: error.message });
    }
  }
};
