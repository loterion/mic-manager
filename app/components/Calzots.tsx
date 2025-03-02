import TaskHeader from "./TaskHeader";

export default function Calzots({ calzots, id }: { calzots: number, id: string }) {
  return (
    <div>
      <TaskHeader taskName='Calçots 🧅' taskId="calzots" id={id} />
      <h4 className="text-9xl font-bold">{calzots}u</h4>
    </div>
  )
}