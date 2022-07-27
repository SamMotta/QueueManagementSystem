import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import CallPanel from '../components/CallPanel'

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
  console.log(actualCall)
  console.table(lastCalls)
  return (
    <div>
      <Head>
        <title>QMS: Home</title>
        <meta name="description" content="Queue Management System for Enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
      <CallPanel actualCall={actualCall} lastCalls={lastCalls} />
    </div>
  )
}

export default Home

// Socket.io? PS: React-query with refetchInterval: 1000;
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
