import { db } from '../../database/connection';

export const SolicitacaoService = {
  async criar(data: any) {
    const { solicitante, datalan, hora, status, itens } = data;

    return await db.transaction(async trx => {
      const [solicitacao] = await trx('solicitacoes')
        .insert({ solicitante, datalan, hora, status })
        .returning('*');

      const itemsWithSolicitacao = itens.map((item: any) => ({
        ...item,
        idsolicitacao: solicitacao.idsolicitacao,
      }));

      await trx('solicitacaoitems').insert(itemsWithSolicitacao);

      return { solicitacao, itens: itemsWithSolicitacao };
    });
  }
};
