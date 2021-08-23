import Head from 'next/head'

export default function Layout({children}) {
    return (
        <div className='layout-container'>
            <Head>
                <title>Trivalia</title>
                <meta name="description" content="Welcome to Trivalia. The most anticipated quiz show of many things."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='h-screen flex flex-col justify-center items-center'>
                <main className='w-11/12 h-4/5 greyish-border shadow bg-white'>
                    {children}
                </main>
            </div>
        </div>
    )
}