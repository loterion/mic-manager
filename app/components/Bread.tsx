import TaskHeader from "./TaskHeader";

export default function Bread({ bread, id }: { bread: string, id: string }) {
  return (
    <div>
      <TaskHeader taskName='Pa 🥖' taskId="bread" id={id} />
      <p className="p-2 text-2xl font-bold">{`${bread} pans de pagès de 1kg`}</p>
    </div>
  )
}