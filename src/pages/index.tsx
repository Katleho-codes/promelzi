import Navigation from "@/components/Navigation"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>ProSuite Risk</title>
      </Head>
      <Navigation />
      <main>
        <div className="container mx-auto p-1">
          <div className="top_part flex justify-between items-center p-2">
            <h1 className="border-l-2 border-l-lime-600 lg:text-3xl font-semibold p-3 text-gray-400">Risk Owner</h1>
            <button type="button" className="bg-blue-800 text-white font-medium px-3 py-2 rounded-sm text-sm outline-0 hover:bg-blue-700 focus:bg-blue-700">Add Risk Owner</button>

          </div>
        </div>
      </main>

    </>
  )
}
