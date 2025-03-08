import TaskHeader from "./TaskHeader";
import { getEventPeople, getPeopleTasks } from "../actions"

export default async function CalzotsSauce({ amount, id }: { amount: string, id: string }) {
  const tasks = await getPeopleTasks(id)
  const personsInCharge = tasks
    .filter(i => i.name === 'sauce')
    .flatMap(i => i.people)
  const eventPeople = await getEventPeople(id)
  const adults = eventPeople.filter(i => !i.child).map(i => i.name)
  return (
    <div>
      <TaskHeader adults={adults} personsInCharge={personsInCharge} taskName='Salsa 💃' taskId="sauce" id={id} />
      <h4 className="text-6xl mt-2 font-bold">{`${amount}L`}</h4>
      <p className="p-2 font-bold">Feta o comprada</p>
    </div>
  )
}