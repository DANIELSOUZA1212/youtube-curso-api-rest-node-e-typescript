/* eslint-disable linebreak-style */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { MonitoramentoProvider } from '../../database/providers/monitoramentoProvider';
import { validation } from '../../shared/middleware';
import { IMonitoramento } from '../../database/models';


interface IBodyProps extends Omit<IMonitoramento, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      cultivo: yup.string().required().min(3).max(150),
      quadra: yup.string().required().min(3).max(150),
      qtd_praga: yup.string().required(),
      partes_afetadas: yup.string().required().min(3).max(150),
    })
  ),
}));


export const create = async (req: Request<{}, {}, IMonitoramento>, res: Response) => {
  const result = await MonitoramentoProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
