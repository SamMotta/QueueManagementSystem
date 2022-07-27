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
    actualCall: { name: "Sam", cpf: "128", type: "Consulta" },
    lastCalls: [
      { name: 'João', cpf: ":)", type: "Consulta" },
      { name: 'Maria', cpf: ":)", type: "Exame" },
      { name: 'Diego', cpf: ":)", type: "Exame" },
    ]
  })
}
