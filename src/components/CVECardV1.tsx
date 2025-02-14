import { ICVE } from "../interfaces"

import { SeverityScaleV1 } from "./"

interface ICVECardV1 {
  cve: ICVE;
}
function CVECardV1(props: ICVECardV1) {
  const { cve } = props;

  return (
    <div className="border-b border-primary-dark min-h-5" key={cve.name}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{cve.name}</h1>
        {cve.severity && <SeverityScaleV1 severity={cve.severity} />}
      </div>
      <div className="">
        <div className="py-2">
          <div className="text-xs">Referances</div>
          <div className="gap-x-2">
            {
              cve.references.map((ref, index) => {
                return <a key={index} className="block underline truncate" href={ref.url} target="_blank" rel="noopener noreferrer">{ref.name || ref.url}</a>
              })
            }
          </div>
        </div>

        <div className="py-2">
          <div className="text-xs">Last Updated At</div>
          {cve.api_last_modified}
        </div>
      </div>
    </div>
  )
}
  
export default CVECardV1
  