import bcrypt from 'bcrypt';

export const PasswordCrypto = {
  hash: async (senha: string) => bcrypt.hash(senha, 10),
  verify: async (senha: string, hash: string) => bcrypt.compare(senha, hash)
};
