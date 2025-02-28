import { getEvent, getEventPeople } from "@/app/actions"

export default async function EventSummaryPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const dataEvent = await getEvent(decodeURI(id))
  const dataPeople = await getEventPeople(decodeURI(id))
  console.log({ dataEvent, dataPeople })
  return (
    <div>
      <h3 className="text-5xl w-auto bg-black text-white font-bold">{`${decodeURI(id)}`}</h3>
      <h3 className="text-3xl bg-black text-white font-bold">{dataEvent.event_date}</h3>
      <h3 className="text-1xl bg-black text-white font-bold">{dataEvent.place}</h3>
    </div>
  )
}