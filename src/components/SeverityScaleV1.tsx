
interface ISeverityScaleV1 {
  severity: number;
}

const colors = [
  "bg-green-400",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-red-400",
  "bg-red-800",
];
const maxScale = 5;

function SeverityScaleV1(props: ISeverityScaleV1) {
  const { severity } = props;
  return (
    <div className="flex gap-x-2 items-center">
      <div className="flex gap-x-0.5 items-end">
        {Array.from({ length: maxScale }).map((_, index) => (
          <div
            key={index}
            className={`w-1 ${index < (severity/2) ? colors[index] : "bg-gray-300"}`}
            style={{ height: `${(index + 1) * 4}px` }}
          ></div>
        ))}
      </div>
      <div className="text-2xl font-bold text-gray-700">{severity.toFixed(1)}</div>
    </div>
  )
}
  
export default SeverityScaleV1
  