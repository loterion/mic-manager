'use client'
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { addPerson } from "../actions"
import { useRouter } from "next/navigation"

const softDrinks = ['aigua',
  'cola',
  'llimonada',
  'trina',
  'acuarius',
  'nestea',
]

const hardDrinks = [
  'cervessa',
  'vi_blanc',
  'vi_negre',
  'vermut'
]

const meats = [
  "xai",
  "botifarra",
  "botifarra_negre",
  "papada",
  "careta",
  "xoriço",
  "txistorra",
  "bou",
]

const softDrinksEnum = z.enum(softDrinks as [string, ...[]])
const hardDrinksEnum = z.enum(hardDrinks as [string, ...[]])
export const PersonFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Introdueix un nom vàlid'
  }),
  child: z.boolean().default(false),
  calzots: z.boolean().default(true),
  drinks: z
    .array(z.union([softDrinksEnum, hardDrinksEnum]))
    .min(1, "Selecciona mínim una beguda"),
  meat: z.array(z.enum(meats as [string, ...string[]])),
  gimme_task: z.boolean().default(true)
}).refine((data) => !(data.gimme_task && data.child), {
  message: "Les tasques només son per els adults.",
  path: ['gimme_task']
}).refine((data) => !(data.drinks.some((drink) => hardDrinks.includes(drink)) && data.child)
  , {
    message: 'No tens edat per veure alcohol',
    path: ['drinks']
  })

export default function PeopleForm({ id }: { id: string }) {
  const meatsObj = meats.map(meat => ({ id: meat, label: meat }))
  const drinksObj = [...softDrinks, ...hardDrinks].map(drink => ({ id: drink, label: drink }))
  const router = useRouter();

  const form = useForm<z.infer<typeof PersonFormSchema>>({
    resolver: zodResolver(PersonFormSchema),
    defaultValues: {
      name: '',
      child: false,
      calzots: true,
      drinks: ['aigua'],
      meat: [],
      gimme_task: true
    }
  })

  function onSubmit(data: z.infer<typeof PersonFormSchema>) {
    addPerson({ ...data, event_name: decodeURI(id) })
    router.push(`/people/${id}/gracies`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="El teu nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="child"
          render={({ field }) => {
            return (
              <FormItem
                className="flex flex-row items-start space-x-3 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  Soc menor de 13 anys
                </FormLabel>
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="calzots"
          render={({ field }) => {
            return (
              <FormItem
                className="flex flex-row items-start space-x-3 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  Menjaré calçots
                </FormLabel>
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="meat"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Carn</FormLabel>
                <FormDescription>
                  Quins tipus de carns menjaràs?
                </FormDescription>
              </div>
              {meatsObj.map((item: { id: string, label: string }) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="meat"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="drinks"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Que beuràs?</FormLabel>
                <FormDescription>
                  Selecciona els tipus de begudes que creus que beuràs
                </FormDescription>
              </div>
              {drinksObj.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='drinks'
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gimme_task"
          render={({ field }) => {
            return (
              <FormItem
                className="flex flex-row items-start space-x-3 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  Puc encarregar-me de comprar i/o preparar alguna cosa.
                </FormLabel>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <Button size="lg" className="w-full" type="submit">Afegir</Button>
      </form>
    </Form>
  )
}