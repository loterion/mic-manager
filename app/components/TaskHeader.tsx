'use client'
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { union } from "ramda"
import { getPeopleTask, insertPeopleTask, updatePeopleTask } from "../actions"

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Introdueix un nom vàlid'
  }),
})

export default function TaskHeader({ taskName, taskId, id }: { taskName: string, taskId: string, id: string }) {
  const [personsInCharge, setPersonsInCharge] = useState<string[]>([])
  const [showForm, setShowForm] = useState(false)

  const fetchPeopleTask = async (eventName: string, taskName: string) => {
    const res = await getPeopleTask(eventName, taskName)
    if (res?.people) {
      setPersonsInCharge(res.people)
    }
  }

  useEffect(() => {
    fetchPeopleTask(id, taskId)
  }, [])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const params = {
      name: taskId,
      people: union(personsInCharge, [data.name]),
      event_name: decodeURI(id)
    }
    if (!personsInCharge.length) {
      await insertPeopleTask(params)
    } else {
      await updatePeopleTask(params)
    }
    fetchPeopleTask(id, taskId)
    setShowForm(false)
  }

  return (
    <div className="flex flex-col">
      <div className="bg-black text-white">
        <h4 className="text-4xl font-bold">{taskName}</h4>
        {personsInCharge.length
          ? <p className="text-sm font-bold text-green-500">{`Responsables: ${personsInCharge.join(', ')}`}</p>
          : <p className="text-sm font-bold text-red-500">Sense persona responsable</p>
        }
        {showForm && <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex w-full space-x-1 p-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="flex-1 w-full bg-white border-white text-black hover:bg-white" type="submit">Afegir</Button>
            </div>
          </form>
        </Form>
        }
      </div>
      <span onClick={() => setShowForm(!showForm)} className="text-xs p-1 text-black bg-white cursor-pointer text-right">Afegir responsable +</span>

    </div>
  )
}