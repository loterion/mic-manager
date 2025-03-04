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
        {showResum && <p className="mt-2 mb-2">
          {
            dataPeople.map(i => i.name).join(', ')
          }
        </p>}
      </div>
      <Link href={`/people/${id}`}><span className="font-bold text-white bg-black">Afegir assistent 👉</span></Link>
    </div>
  )
}