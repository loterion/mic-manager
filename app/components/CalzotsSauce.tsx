import TaskHeader from "./TaskHeader";

export default function CalzotsSauce({ amount, id }: { amount: string, id: string }) {
  return (
    <div>
      <TaskHeader taskName='Salsa 💃' taskId="sauce" id={id} />
      <h4 className="text-6xl mt-2 font-bold">{`${amount}L`}</h4>
      <p className="p-2 font-bold">Feta o comprada</p>
    </div>
  )
}