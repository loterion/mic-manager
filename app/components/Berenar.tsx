import TaskHeader from "./TaskHeader";

export default function Berenar({ people, id }: { people: number, id: string }) {
  return (
    <div>
      <TaskHeader taskName='Berenar 🍪' taskId="berenar" id={id} />
      <p className="p-2 font-bold">La persona responsable ha de fer o comprar el berenar per {people} infants.</p>
    </div>
  )
}