import { useState } from "react"

import { fetchPayload, fetchCVEs } from "./services"
import { ICVE } from "./interfaces"

import {
  HeaderV1,
  ListV1,
  FooterV1,
  SearchV1
} from "./components"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [cves, setCves] = useState<ICVE[] | null>([])

  const handleSubmit = async (searchText: string) => {
    setIsLoading(true)

    const response = await fetchPayload(searchText)
    const data = await fetchCVEs(response)
    setCves(data)
    setIsLoading(false)
  }

  return (
    <div className="h-full bg-background">
      <HeaderV1 />
      <div className="mx-auto">
        <SearchV1 onSearch={handleSubmit} />
        <ListV1 isLoading={isLoading} data={cves} />
      </div>
      <FooterV1 />
    </div>
  )
}

export default App
