import type { NextPage } from 'next'
import Head from 'next/head'
import CallPanel from '../components/CallPanel'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QMS: Home</title>
        <meta name="description" content="Queue Management System for Enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
      <CallPanel />
    </div>
  )
}

export default Home
