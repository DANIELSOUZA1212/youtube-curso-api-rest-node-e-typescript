import { Request, Response } from 'express';
import { db } from '../database/connection';
import { PasswordCrypto } from '../utils/PassowordCrypto';

export const AuthController = {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const usuario = await db('usuarios').where({ email }).first();

    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });

    const match = await PasswordCrypto.verify(senha, usuario.senha);
    if (!match) return res.status(401).json({ error: 'Senha incorreta' });

    return res.json({ message: 'Login bem-sucedido', usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });
  }
};
