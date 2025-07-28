import { Request, Response } from 'express';
import { db } from '../database/connection';
import { PasswordCrypto } from '../utils/PassowordCrypto';

export const UserController = {
  async register(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const hashedPassword = await PasswordCrypto.hash(senha);
    try {
      const [usuario] = await db('usuarios').insert({ nome, email, senha: hashedPassword }).returning(['id', 'nome', 'email']);
      return res.status(201).json(usuario);
    } catch (error: any) {
      console.error('Erro ao cadastrar usuário:', error.message);
      return res.status(400).json({ error: error.message });
    }

  }
};
