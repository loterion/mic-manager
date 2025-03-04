import { getEvent, getEventPeople } from "@/app/actions"
import Allioli from "@/app/components/Allioli"
import Bread from "@/app/components/Bread"
import Calzots from "@/app/components/Calzots"
import CalzotsSauce from "@/app/components/CalzotsSauce"
import Coffee from "@/app/components/Coffee"
import Deserts from "@/app/components/Deserts"
import Drinks from "@/app/components/Drinks"
import Firewood from "@/app/components/Firewood"
import Ice from "@/app/components/Ice"
import Meat from "@/app/components/Meat"
import Others from "@/app/components/Others"
import ResumAssistents from "@/app/components/ResumAssistents"
import Snacks from "@/app/components/Snacks"
import { getShoppingList } from "@/app/utils"

export default async function EventSummaryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const dataEvent = await getEvent(decodeURI(id))
  const dataPeople = await getEventPeople(decodeURI(id))
  const shoppingList = getShoppingList(dataPeople)
  return (
    <>
      <h3 className="font-bold">
        <span className="text-4xl bg-black text-white">{dataEvent.name}</span><br />
        <span className="text-5xl bg-black text-white">{dataEvent.event_date}</span><br />
        <span className="text-2xl bg-black text-white">📍{dataEvent.place}</span>
      </h3>
      <ResumAssistents dataPeople={dataPeople} id={id} />
      <Calzots calzots={shoppingList.calzots} id={decodeURI(id)} />
      <CalzotsSauce amount={shoppingList.sauce} id={decodeURI(id)} />
      <Meat meat={shoppingList.meat} id={decodeURI(id)} />
      <Drinks drinks={shoppingList.drinks} id={decodeURI(id)} />
      <Bread bread={shoppingList.bread} id={decodeURI(id)} />
      <Others id={decodeURI(id)} />
      <Snacks id={decodeURI(id)} />
      <Firewood id={decodeURI(id)} />
      <Ice ice={shoppingList.ice} id={decodeURI(id)} />
      <Allioli id={decodeURI(id)} />
      <Deserts id={decodeURI(id)} />
      <Coffee id={decodeURI(id)} />
    </>
  )
}