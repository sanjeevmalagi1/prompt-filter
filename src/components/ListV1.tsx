import { ICVE } from "../interfaces"

import { CVECardV1, CVELoaderV1 } from "./"

interface IListV1 {
  isLoading: boolean;
  firstRequest: boolean;
  data: ICVE[] | null;
}
function ListV1(props: IListV1) {
  const { isLoading, data, firstRequest } = props;
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <CVELoaderV1 />
        <CVELoaderV1 />
        <CVELoaderV1 />
      </div>
    )  
  }

  if (!data?.length && !firstRequest) {
    return <div> Sorry! we could not find suitable results</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {
        data?.map((cve: ICVE) => {
          return (<CVECardV1 key={cve.name} cve={cve} />)
        })
      }
    </div>
  )
}
  
  export default ListV1
  