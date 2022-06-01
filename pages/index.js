import { useSession, getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'


export default function Home({ session }) {
  // const { data: session } = useSession();
  if (!session) return <Login />

  return (
    <div >
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      <main>
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        {/* vidgets */}
      </main>

    </div>
  )
}


export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
