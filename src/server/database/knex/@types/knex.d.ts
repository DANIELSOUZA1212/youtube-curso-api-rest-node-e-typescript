/* eslint-disable linebreak-style */
import { IMonitoramento, IPessoa, IUsuario } from '../../models';


declare module 'knex/types/tables' {
  interface Tables {
    pessoa: IPessoa;
    monitoramento: IMonitoramento;
    usuario: IUsuario;
  }
}
