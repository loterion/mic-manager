import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Allioli({ id }: { id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'allioli')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Allioli 🤐' taskId="allioli" id={id} />
      <p className="p-2 font-bold">Fet o comprat</p>
    </div>
  )
}