function CVELoaderV1() {
  return (
    <div className="border-b border-primary-dark min-h-5 p-2">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-4 rounded bg-primary-dark"></div>
              <div className="col-span-1 h-4 rounded bg-primary-dark"></div>
            </div>
            <div className="h-3 rounded bg-primary-dark w-3/4"></div>
          </div>
        </div>
      </div>
      <div className="py-2 space-y-2">
        <div className="h-3 w-1/4 rounded bg-primary-dark"></div>
        <div className="h-3 w-1/2 rounded bg-primary-dark"></div>
      </div>
      <div className="py-2 space-y-2">
        <div className="h-3 w-1/4 rounded bg-primary-dark"></div>
        <div className="h-3 w-1/3 rounded bg-primary-dark"></div>
      </div>
    </div>
  )
}
  
export default CVELoaderV1
  