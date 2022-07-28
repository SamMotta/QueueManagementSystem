// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../index'

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    actualCall: { name: "Samuel Teixeira Pires Mota", cpf: "128.265.213-21", type: "Consulta", counter: 1 },
    lastCalls: [
      { name: '', cpf: "987.123.747-21", type: "Consulta", counter: 2 },
      { name: 'Maria Clara de Souza', cpf: ":)", type: "Exame", counter: 3 },
      { name: 'João Cândido Pereira', cpf: ":)", type: "Exame", counter: 7 },
    ]
  })
}
