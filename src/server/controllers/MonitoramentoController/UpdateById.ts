/* eslint-disable linebreak-style */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { MonitoramentoProvider } from '../../database/providers/monitoramentoProvider';
import { validation } from '../../shared/middleware';
import { IMonitoramento} from '../../database/models';


interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<IMonitoramento, 'id'> { }

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object({
      cultivo: yup
        .string()
        .required('O cultivo é obrigatório')
        .min(3, 'O cultivo deve ter no mínimo 3 caracteres')
        .max(150, 'O cultivo deve ter no máximo 150 caracteres'),

      quadra: yup
        .string()
        .required('A quadra é obrigatória')
        .min(3, 'A quadra deve ter no mínimo 3 caracteres')
        .max(150, 'A quadra deve ter no máximo 150 caracteres'),

      qtd_praga: yup
        .string()
        .required('A quantidade de praga é obrigatória'),


      partes_afetadas: yup
        .string()
        .required('As partes afetadas são obrigatórias')
        .min(3, 'As partes afetadas devem ter no mínimo 3 caracteres')
        .max(150, 'As partes afetadas devem ter no máximo 150 caracteres'),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object({
      id: yup
        .number()
        .integer('O ID deve ser um número inteiro')
        .required('O ID é obrigatório')
        .moreThan(0, 'O ID deve ser maior que zero'),
    })
  ),
}));

// ✅ Controller
export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.',
      },
    });
  }

  const result = await MonitoramentoProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};
