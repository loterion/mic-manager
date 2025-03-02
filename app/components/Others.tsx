import TaskHeader from "./TaskHeader";

export default function Others({ id }: { id: string }) {
  return (
    <div>
      <TaskHeader taskName='Altres 🍽️' taskId="others" id={id} />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="p-2 font-bold">Sal</li>
        <li className="p-2 font-bold">Paper de cuina</li>
        <li className="p-2 font-bold">Estovalles de paper</li>
        <li className="p-2 font-bold">Ganivet</li>
        <li className="p-2 font-bold">Paper de diari</li>
      </ul>
    </div>
  )
}