import { atom, PrimitiveAtom, Provider } from "jotai";
import { ReactNode } from "react";
import { z } from "zod"
import { EventFormSchema } from "./components/EventForm"

export const eventAtom = atom<PrimitiveAtom<z.infer<typeof EventFormSchema>>>({})

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}