import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Fungible({ id }: { id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'fungible')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Fungible 🧻' taskId="fungible" id={id} />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="p-2 font-bold">Sal</li>
        <li className="p-2 font-bold">Paper de cuina</li>
        <li className="p-2 font-bold">Estovalles de paper</li>
        <li className="p-2 font-bold">Paper de diari</li>
        <li className="p-2 font-bold">Safates alumini per la carn</li>
        <li className="p-2 font-bold">Safates alumini pel romescu</li>
      </ul>
    </div>
  )
}