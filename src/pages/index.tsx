import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CallPanel from '../components/CallPanel'
// import ""

export type QueueType = {
  // uuid: string;
  name?: string;
  cpf: string;
  type: string;
}

export type Data = {
  actualCall: QueueType;
  lastCalls: Array<QueueType>;
}

const Home: NextPage<Data> = ({ actualCall, lastCalls }: Data) => {
  // console.log(actualCall)
  // console.table(lastCalls)
  return (
    <div>
      <Head>
        <title>QMS: Home</title>
        <meta name="description" content="Queue Management System for Enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full bg-cyan-600 p-2 flex flex-row">
        <Image src="/tuê.TI.png" height="48px" width="48px" alt="Tuê Informática" />
        <p className='px-2.5 text-xl font-bold my-auto'>Queue</p> {/* Nome da empresa? Só fila ou sem header? */}
      </div>
      <CallPanel actualCall={actualCall} lastCalls={lastCalls} />
    </div>
  )
}

export default Home

// Socket.io? PS: React-query with refetchInterval: 1000 or SWR
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://3000-sammotta-queuemanagemen-3ryqhh6dkh2.ws-us54.gitpod.io/api/queue')
  const { actualCall, lastCalls }: Data = await res.json()

  return {
    props: {
      actualCall,
      lastCalls
    },
    
  }
}