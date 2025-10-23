/* eslint-disable linebreak-style */
import { ETableNames } from '../../ETableNames';
import { IMonitoramento } from '../../models';
import { Knex } from '../../knex';


export const getById = async (id: number): Promise<IMonitoramento | Error> => {
  try {
    const result = await Knex(ETableNames.monitoramento)
      .select('*')
      .where('id', '=', id)
      .first();

    if (result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar o registro');
  }
};
