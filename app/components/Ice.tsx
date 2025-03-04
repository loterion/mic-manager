import TaskHeader from "./TaskHeader";

export default function Ice({ ice, id }: { ice: string, id: string }) {
  return (
    <div>
      <TaskHeader taskName='Gel 🧊' taskId="ice" id={id} />
      <p className="p-2 text-2xl font-bold">{`${ice}kg`}</p>
    </div>
  )
}