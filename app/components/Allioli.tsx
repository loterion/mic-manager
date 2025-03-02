import TaskHeader from "./TaskHeader";

export default function Allioli({ id }: { id: string }) {
  return (
    <div>
      <TaskHeader taskName='Allioli 🤐' taskId="allioli" id={id} />
      <p className="p-2 font-bold">Fet o comprat</p>
    </div>
  )
}