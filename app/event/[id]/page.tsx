import { getEvent, getEventPeople } from "@/app/actions"
import Allioli from "@/app/components/Allioli"
import Berenar from "@/app/components/Berenar"
import Bread from "@/app/components/Bread"
import Calzots from "@/app/components/Calzots"
import CalzotsSauce from "@/app/components/CalzotsSauce"
import Coffee from "@/app/components/Coffee"
import Deserts from "@/app/components/Deserts"
import Drinks from "@/app/components/Drinks"
import Eco from "@/app/components/Eco"
import Firewood from "@/app/components/Firewood"
import Fungible from "@/app/components/Fungible"
import Ice from "@/app/components/Ice"
import Meat from "@/app/components/Meat"
import Others from "@/app/components/Others"
import ResumAssistents from "@/app/components/ResumAssistents"
import Snacks from "@/app/components/Snacks"
import { getShoppingList } from "@/app/utils"

export default async function EventSummaryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const dataEvent = await getEvent(id)
  const dataPeople = await getEventPeople(id)
  const shoppingList = getShoppingList(dataPeople)
  return (
    <>
      <h3 className="font-bold">
        <span className="text-4xl bg-black text-white">{dataEvent.name}</span><br />
        <span className="text-5xl bg-black text-white">{dataEvent.event_date}</span><br />
        <span className="text-2xl bg-black text-white">📍{dataEvent.place}</span>
      </h3>
      <ResumAssistents dataPeople={dataPeople} id={id} />
      <Calzots calzots={shoppingList.calzots} id={id} />
      <CalzotsSauce amount={shoppingList.sauce} id={id} />
      <Meat meat={shoppingList.meat} id={id} />
      <Drinks drinks={shoppingList.drinks} id={id} />
      <Bread bread={shoppingList.bread} id={id} />
      <Others id={id} />
      <Fungible id={id} />
      <Snacks id={id} />
      <Firewood id={id} />
      <Ice ice={shoppingList.ice} id={id} />
      <Allioli id={id} />
      <Deserts id={id} />
      <Coffee id={id} />
      <Berenar people={shoppingList.children} id={id} />
      <Eco />
    </>
  )
}