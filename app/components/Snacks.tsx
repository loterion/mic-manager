import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Snacks({ id }: { id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'snacks')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Pica-pica 🫒' taskId="snacks" id={id} />
      <p className="p-2 font-bold">La persona responsable es lliure d&apos;escollir el pica-pica.</p>
    </div>
  )
}