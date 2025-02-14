import { SyntheticEvent, useState } from "react"

import { fetchPayload, fetchCVEs } from "./services"
import { ICVE } from "./interfaces"

import { HeaderV1, ListV1, FooterV1 } from "./components"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState("")
  const [cves, setCves] = useState<ICVE[] | null>([])

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setInput("")

    const response = await fetchPayload(input)
    const data = await fetchCVEs(response)
    setCves(data)
    setIsLoading(false)
  }

  return (
    <div className="h-full bg-amber-100">
      <HeaderV1 />
      <div className="mx-auto">
        <form className="" onSubmit={handleSubmit}>   
          <label htmlFor="default-search" className="mt-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input value={input} onChange={e => setInput(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything ..." required />
              <button type="submit" className="text-white absolute end-5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <ListV1 isLoading={isLoading} data={cves} />
      </div>
      <FooterV1 />
    </div>
  )
}

export default App
