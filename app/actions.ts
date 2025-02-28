'use server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { z } from "zod"
import { PersonFormSchema } from './components/PeopleForm'
import { EventFormSchema } from './components/EventForm'

export async function createEvent(data: z.infer<typeof EventFormSchema>) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
    .from('events')
    .insert(data)
  if(error) notFound()
}

export async function addPerson(data: z.infer<typeof PersonFormSchema>) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
    .from('people')
    .insert(data)
  if(error) {
    console.log({error})
    notFound()
  } 
}