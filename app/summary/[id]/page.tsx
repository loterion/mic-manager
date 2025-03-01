import { getEvent, getEventPeople } from "@/app/actions"
import Allioli from "@/app/components/Allioli"
import Calzots from "@/app/components/Calzots"
import CalzotsSauce from "@/app/components/CalzotsSauce"
import Coffee from "@/app/components/Coffee"
import Deserts from "@/app/components/Deserts"
import Drinks from "@/app/components/Drinks"
import Firewood from "@/app/components/Firewood"
import Meat from "@/app/components/Meat"
import Others from "@/app/components/Others"
import Snacks from "@/app/components/Snacks"
import { getShoppingList } from "@/app/utils"

export default async function EventSummaryPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const dataEvent = await getEvent(decodeURI(id))
  const dataPeople = await getEventPeople(decodeURI(id))
  const shoppingList = getShoppingList(dataPeople)
  return (
    <>
      <h3 className="font-bold">
        <span className="text-4xl bg-black text-white">{`${decodeURI(id)}`}</span><br />
        <span className="text-5xl bg-black text-white">{dataEvent.event_date}</span><br />
        <span className="text-2xl bg-black text-white">{dataEvent.place}</span>
      </h3>
      <p className="font-bold">Assistents: {dataPeople.map(i => i.name).join(', ')}</p>
      <Drinks drinks={shoppingList.drinks} />
      <Calzots calzots={shoppingList.calzots} />
      <CalzotsSauce />
      <Meat meat={shoppingList.meat} />
      <Others />
      <Snacks />
      <Firewood />
      <Allioli />
      <Deserts />
      <Coffee />
    </>
  )
}