import { ICVE } from "../interfaces"

interface IListV1 {
  isLoading: boolean;
  data: ICVE[] | null;
}
function ListV1(props: IListV1) {
  const { isLoading, data } = props;
  if (isLoading) {
    return (
      <div className="m-5">
        <h1 className="font-bold text-3xl">Loading...</h1>
      </div>
    )  
  }
  return (
    <div className="mx-5 m-5 ">
      {
        data?.map((cve: ICVE) => {
          return (
            <div className="p-2 bg-red-100 my-5" key={cve.name}>
              <h1>{cve.name}</h1>
              <h2>Severity: {cve.severity}</h2>
              <p>API Last Modified: {cve.api_last_modified}</p>
              <p>API Created: {cve.api_created}</p>
              <p>References: {cve.references.map(ref => ref.url).join(', ')}</p>
              <p>Metrics: {JSON.stringify(cve.metrics)}</p>
              <p>Weaknesses: {cve.weaknesses.map(weakness => weakness.source).join(', ')}</p>
            </div>
          )
        })
      }
    </div>
  )
}
  
  export default ListV1
  