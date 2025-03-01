export default function Meat({ meat }) {
  return (
    <div>
      <h4 className="text-4xl font-bold bg-black text-white">Carn</h4>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {Object.entries(meat).map(([key, value]) =>
          <li key={`${key}: ${value}L`} className="p-2">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 font-bold min-w-0">
                {key}
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {`${value}kg`}
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}