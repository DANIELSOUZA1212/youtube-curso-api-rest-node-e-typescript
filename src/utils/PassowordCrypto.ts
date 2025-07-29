import bcrypt from 'bcrypt';

export const PasswordCrypto = {
  hash: async (senha: string): Promise<string> => {
    return await bcrypt.hash(senha, 10);
  },

  verify: async (senha: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(senha, hash);
  }
};
