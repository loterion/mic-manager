'use client'

import Link from "next/link"
import { useState } from "react"
import { PeopleType } from "../types"

export default function ResumAssistents({ dataPeople, id }: { dataPeople: PeopleType[], id: string }) {
  const [showResum, setShowResum] = useState<boolean>(false)

  return (
    <div>
      <div>
        <h4 onClick={() => setShowResum(!showResum)} className="text-4xl cursor-pointer hover:bg-red-800 font-bold bg-black text-white">Resum assistents <span>{showResum ? '-' : '+'}</span></h4>
        {showResum && <dl className="max-w-md divide-y divide-gray-200">
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
        }
      </div>
      <Link href={`/people/${id}`}><span className="font-bold text-white bg-black">Afegir assistent 👉</span></Link>
    </div>
  )
}