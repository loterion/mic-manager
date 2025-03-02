import { getEvent, getEventPeople } from "@/app/actions"
import Allioli from "@/app/components/Allioli"
import Bread from "@/app/components/Bread"
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
import Link from "next/link"

export default async function EventSummaryPage({ params }: { params: { id: string } }) {
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
      <div>
        <div>
          <h4 className="text-4xl font-bold bg-black text-white">Resum assistents</h4>
          <dl className="max-w-md divide-y divide-gray-200">
            {
              dataPeople.map(i => (
                <div key={`item-${i.name}`} className="flex flex-col pb-3">
                  <dt className="mb-1 text-sm font-bold mt-2">{i.name}</dt>
                  <dd className="text-xs">Carns: {i.meat.join(', ')}</dd>
                  <dd className="text-xs">Begudes: {i.drinks.join(', ')}</dd>
                </div>
              ))
            }
          </dl>
        </div>
        <Link href={`/people/${id}`}><span className="font-bold text-white bg-black">Afegir assistent 👉</span></Link>
      </div>
      <Calzots calzots={shoppingList.calzots} id={decodeURI(id)} />
      <CalzotsSauce amount={shoppingList.sauce} id={decodeURI(id)} />
      <Meat meat={shoppingList.meat} id={decodeURI(id)} />
      <Drinks drinks={shoppingList.drinks} id={decodeURI(id)} />
      <Bread bread={shoppingList.bread} id={decodeURI(id)} />
      <Others id={decodeURI(id)} />
      <Snacks id={decodeURI(id)} />
      <Firewood id={decodeURI(id)} />
      <Allioli id={decodeURI(id)} />
      <Deserts id={decodeURI(id)} />
      <Coffee id={decodeURI(id)} />
    </>
  )
}