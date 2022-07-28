// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type QueueType = {
  // uuid: string;
  name?: string;
  cpf: string;
  type: string;
}

type Data = {
  actualCall: QueueType;
  lastCalls: Array<QueueType>;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    actualCall: { name: "Samuel Teixeira Pires Mota", cpf: "128.265.213-21", type: "Consulta" },
    lastCalls: [
      { name: '', cpf: "987.123.747-21", type: "Consulta" },
      { name: 'Maria Clara de Souza', cpf: ":)", type: "Exame" },
      { name: 'João Cândido Pereira', cpf: ":)", type: "Exame" },
    ]
  })
}
