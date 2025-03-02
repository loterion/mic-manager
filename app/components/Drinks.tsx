import TaskHeader from "./TaskHeader"

type drinkType = Record<string, string>
export default function Drinks({ drinks, id }: { drinks: drinkType, id: string }) {
  return (
    <div>
      <TaskHeader taskName='Begudes 🍷' taskId="drinks" id={id} />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {Object.entries(drinks).map(([key, value]) =>
          <li key={`${key}: ${value}L`} className="p-2">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 font-bold min-w-0">
                {key}
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {`${value}L`}
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}