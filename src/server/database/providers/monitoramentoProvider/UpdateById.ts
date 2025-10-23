/* eslint-disable linebreak-style */
import { ETableNames } from '../../ETableNames';
import { IMonitoramento } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, monitoramento: Omit<IMonitoramento, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.monitoramento)
      .update(monitoramento)
      .where('id', '=', id);

    if (result > 0) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar o registro');
  }
};
