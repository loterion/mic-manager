import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Berenar({ people, id }: { people: number, id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'berenar')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Berenar 🍪' taskId="berenar" id={id} />
      <p className="p-2 font-bold">La persona responsable ha de fer o comprar el berenar per {people} infants.</p>
    </div>
  )
}