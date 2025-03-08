import TaskHeader from "./TaskHeader"
import { getEventPeople, getPeopleTasks } from "../actions"

type drinkType = Record<string, string>
export default async function Drinks({ drinks, id }: { drinks: drinkType, id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'drinks')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Begudes 🍷' taskId="drinks" id={id} />
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