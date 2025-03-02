import TaskHeader from "./TaskHeader";

export default function Coffee({ id }: { id: string }) {
  return (
    <div>
      <TaskHeader taskName='Cafè ☕' taskId="coffee" id={id} />
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="p-2 font-bold">Cafè <span className="font-normal text-xs">(normal/nespresso/soluble... el que es pugui)</span></li>
        <li className="p-2 font-bold">Llet <span className="font-normal text-xs">amb alguna alternativa vegetal</span></li>
        <li className="p-2 font-bold">Sucre</li>
      </ul>
    </div>
  )
}