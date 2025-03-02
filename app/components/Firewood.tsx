import TaskHeader from "./TaskHeader";

export default function Firewood({ id }: { id: string }) {
  return (
    <div>
      <TaskHeader taskName='Llenya 🔥' taskId="firewood" id={id} />
      <p className="p-2 font-bold">La persona responsable s&apos;ha d&apos;informar si al lloc hi ha llenya disponible o si l&apos;ha de comprar.</p>
    </div>
  )
}