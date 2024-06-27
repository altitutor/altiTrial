import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Welcome to Altitutor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Altitutor!</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are excited to help you on your learning journey. Click below to get started with a trial session!
        </p>
        <Link href="/questionnaire">
          <div className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition">
            Go to Questionnaire
          </div>
        </Link>
      </main>
    </div>
  )
}
