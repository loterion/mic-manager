import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Others({ id }: { id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'others')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Altres 🍽️' taskId="others" id={id} />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="p-2 font-bold">Ganivet</li>
        <li className="p-2 font-bold">Pinces</li>
        <li className="p-2 font-bold">Draps de cuina</li>
      </ul>
    </div>
  )
}