import express from 'express';
import { db } from './database/connection';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Campos obrigatórios' });
  }

  try {
    const existe = await db('usuarios').where({ email }).first();
    if (existe) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }

    const hashed = await bcrypt.hash(senha, 10);

    const [usuario] = await db('usuarios')
      .insert({ nome, email, senha: hashed })
      .returning(['id', 'nome', 'email']);

    return res.status(201).json(usuario);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno' });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await db('usuarios').select('id', 'nome', 'email');
    res.json(usuarios);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno' });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
