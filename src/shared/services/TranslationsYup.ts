import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Este campo é obrigatório',
    notType: 'Formato inválido',
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Não pode ser um dos seguintes valores: ${values}',
    defined: 'Este campo precisa estar definido',
  },
  string: {
    min: 'Deve ter no mínimo ${min} caracteres',
    max: 'Deve ter no máximo ${max} caracteres',
    email: 'Deve ser um e-mail válido',
    url: 'Deve ser uma URL válida',
    trim: 'Não deve conter espaços no início ou fim',
    lowercase: 'Deve estar em letras minúsculas',
    uppercase: 'Deve estar em letras maiúsculas',
  },
  number: {
    min: 'Deve ser no mínimo ${min}',
    max: 'Deve ser no máximo ${max}',
    integer: 'Deve ser um número inteiro',
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo',
  },
  date: {
    min: 'Deve ser posterior a ${min}',
    max: 'Deve ser anterior a ${max}',
  },
  array: {
    min: 'Deve ter no mínimo ${min} itens',
    max: 'Deve ter no máximo ${max} itens',
  },
});
