import TaskHeader from "./TaskHeader";

export default function Deserts({ id }: { id: string }) {
  return (
    <div>
      <TaskHeader taskName='Postres 🍓🍰' taskId="deserts" id={id} />
      <p className="p-2 font-bold">Fet o comprat</p>
    </div>
  )
}