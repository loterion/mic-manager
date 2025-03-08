import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function Firewood({ id }: { id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'firewood')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Llenya 🔥' taskId="firewood" id={id} />
      <p className="p-2 font-bold">La persona responsable s&apos;ha d&apos;informar si al lloc hi ha llenya disponible o si l&apos;ha de comprar.</p>
    </div>
  )
}