import Link from "next/link"
import { getEvent } from "@/app/actions"
import PeopleForm from "@/app/components/PeopleForm"

export default async function People({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const dataEvent = await getEvent(id)
  return (
    <>
      <h3 className="font-bold">
        <span className="text-4xl bg-black text-white">{dataEvent.name}</span><br />
        <span className="text-5xl bg-black text-white">{dataEvent.event_date}</span><br />
        <span className="text-2xl bg-black text-white">📍{dataEvent.place}</span>
      </h3>
      <Link href={`/summary/${id}`}><span className="font-bold text-white bg-black">Anar al resum 👉</span></Link>
      <h4 className="text-2xl font-bold">Alta de participants</h4>
      <PeopleForm id={id} />
    </>
  )
}