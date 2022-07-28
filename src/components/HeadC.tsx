import Head from "next/head"

interface HeadProps {
    page: string;
}

export default function HeadC({ page }: HeadProps) {
    return (
        <Head>
        <title>QMS: {page}</title>
        <meta name="description" content="Queue Management System for Enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}
