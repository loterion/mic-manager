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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useAtom } from "jotai"
import { eventAtom } from "../providers"
import { useRouter } from "next/navigation"
import { createEvent } from "../actions"

export const EventFormSchema = z.object({
  name: z.string().min(5, {
    message: "El nom ha de tenir un mínim de 5 caracters",
  }),
  event_date: z.date({ message: "Selecciona una data vàlida" }),
  place: z.string().min(5, { message: "L'adreça ha de tenir un mínim de 5 caracters" }),
})

export default function EventForm() {
  const [, setEvent] = useAtom(eventAtom)
  const router = useRouter();
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      name: "",
      event_date: new Date(),
      place: "",
    },
  })

  function onSubmit(data: z.infer<typeof EventFormSchema>) {
    setEvent(data)
    createEvent(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Títol" {...field} />
              </FormControl>
              <FormDescription>
                Nom de l'esdeveniment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="event_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Selecciona una data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription>
                Data de l'esdeveniment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lloc</FormLabel>
              <FormControl>
                <Input placeholder="Lloc" {...field} />
              </FormControl>
              <FormDescription>
                Lloc de l'esdeveniment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Crear</Button>
      </form>
    </Form>
  );
}