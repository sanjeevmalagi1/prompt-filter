import { useState } from "react"

interface ISearchV1 {
  onSearch: (input: string) => void;
}
function SearchV1(props: ISearchV1) {
  const { onSearch } = props
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(input)
  }
  
  return (
    <form className="" onSubmit={handleSubmit}>   
      <div className="flex gap-x-2">
          <input
            id="default-search"
            value={input} onChange={e => setInput(e.target.value)}
            type="search"
            className="rounded-lg block w-full p-4 text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 border-blue-500"
            placeholder="Search CVEs (and hit enter)..."
            required
          />
          <button type="submit" className="text-white end-5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </button>
      </div>
    </form>
  )
}
  
  export default SearchV1
  