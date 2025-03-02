import TaskHeader from "./TaskHeader";

export default function Snacks({ id }: { id: string }) {
  return (
    <div>
      <TaskHeader taskName='Pica-pica 🫒' taskId="snacks" id={id} />
      <p className="p-2 font-bold">La persona responsable es lliure d'escollir el pica-pica.</p>
    </div>
  )
}