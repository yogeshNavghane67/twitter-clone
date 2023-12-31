import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import Head from 'next/head'
import Image from 'next/image'
import CommentModal from "../components/CommentModal";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({newsResults,randomUsersResults}) {
  return (
   <div>
    <Head>
      <title>Twitter Clone</title>
      <meta name="description" content="Generated by Nextjs"></meta>
      <link rel='stylesheet' href='/favicon.ico'></link>
    </Head>

    <main className='flex min-h-screen mx-auto'>
      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results}/>
      
      {/* Modal */}
       <CommentModal />
    </main>
   </div>
  )
}

export async function getServerSideProps(){
  const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
.then((res) => res.json());

const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    }
  }
}