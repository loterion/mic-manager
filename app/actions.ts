'use server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { z } from "zod"
import { PersonFormSchema } from './components/PeopleForm'
import { EventFormSchema } from './components/EventForm'

export async function getEvent(id: string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('events')
    .select()
    .eq('event_id', id)

    if(error) {
      console.log({error})
      notFound()
    }
    return data[0]
}

export async function getEventPeople(id: string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('people')
    .select()
    .eq('event_id', id)
  
  if(error) {
    console.log({error})
    notFound()
  }
  return data
}

export async function createEvent(data: z.infer<typeof EventFormSchema>) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error, status, data: insertData } = await supabase
    .from('events')
    .insert(data)
    .select()

  if(error) {
    console.log({error})
    notFound()
  } 

  if(status === 201 && insertData?.length){
    redirect(`/people/${insertData[0].event_id}`)
  }
}

export async function addPerson(data: { event_id: string } & z.infer<typeof PersonFormSchema>) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
    .from('people')
    .insert({...data})
  if(error) {
    console.log('addPerson', {error})
    notFound()
  } 
}

export async function insertPeopleTask(data: {name: string, people: string[], event_id: string}){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
  .from('tasks')
  .insert([
    data,
  ])
  if(error) {
    console.log('insertPeopleTask', {error})
    notFound()
  }
}

export async function updatePeopleTask(data: {name: string, people: string[], event_id: string}){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
    .from('tasks')
    .update({ people: data.people })
    .eq('event_id', data.event_id)
    .eq('name', data.name)
  if(error) {
    console.log({error})
    notFound()
  }
}

export async function getPeopleTask(id:string, taskName: string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .eq('event_id', id)
    .eq('name', taskName)
  if(error) {
    console.log({error})
    notFound()
  }
  return data[0]
}

export async function getPeopleTasks(id:string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .eq('event_id', id)
  if(error) {
    console.log({error})
    notFound()
  }
  return data
}