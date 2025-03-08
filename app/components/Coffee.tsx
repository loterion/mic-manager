import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Coffee({ id }: { id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'coffee')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Cafè ☕' taskId="coffee" id={id} />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="p-2 font-bold">Cafè <span className="font-normal text-xs">(normal/nespresso/soluble... el que es pugui)</span></li>
        <li className="p-2 font-bold">Llet <span className="font-normal text-xs">amb alguna alternativa vegetal</span></li>
        <li className="p-2 font-bold">Sucre</li>
      </ul>
    </div>
  )
}