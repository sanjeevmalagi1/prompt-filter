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
  const [firstRequest, setFirstRequest] = useState(true)
  const [cves, setCves] = useState<ICVE[] | null>([])

  const handleSubmit = async (searchText: string) => {
    setIsLoading(true)

    if (firstRequest) {
      setFirstRequest(false)
    }
    
    const response = await fetchPayload(searchText)
    const data = await fetchCVEs(response)
    setCves(data)
    setIsLoading(false)
  }

  return (
    <div className="bg-background">
      <HeaderV1 />
      <div className="mx-2 min-h-screen md:container md:mx-auto mb-10">
        <div className="my-5">
          <SearchV1 onSearch={handleSubmit} />
        </div>
        <div className="my-5">
          <ListV1 firstRequest={firstRequest} isLoading={isLoading} data={cves} />
        </div>
      </div>
      <FooterV1 />
    </div>
  )
}

export default App
