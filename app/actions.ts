'use server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { z } from "zod"
import { PersonFormSchema } from './components/PeopleForm'
import { EventFormSchema } from './components/EventForm'

export async function getEvent(eventName: string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('events')
    .select()
    .eq('name', eventName)

    if(error) {
      console.log({error})
      notFound()
    }
    return data[0]
}

export async function getEventPeople(eventName: string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('people')
    .select()
    .eq('event_name', eventName)
  
  if(error) {
    console.log({error})
    notFound()
  }
  return data
}

export async function createEvent(data: z.infer<typeof EventFormSchema>) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error, status } = await supabase
    .from('events')
    .insert(data)

  if(error) {
    console.log({error})
    notFound()
  } 

  if(status === 201){
    redirect(`/people/${data.name}`)
  }
}

export async function addPerson(data: { event_name: string } & z.infer<typeof PersonFormSchema>) {
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

export async function insertPeopleTask(data: {name: string, people: string[], event_name: string}){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
  .from('tasks')
  .insert([
    data,
  ])
  if(error) {
    console.log({error})
    notFound()
  }
}

export async function updatePeopleTask(data: {name: string, people: string[], event_name: string}){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase
    .from('tasks')
    .update({ people: data.people })
    .eq('event_name', data.event_name)
    .eq('name', data.name)
  if(error) {
    console.log({error})
    notFound()
  }
}

export async function getPeopleTask(eventName:string, taskName: string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .eq('event_name', eventName)
    .eq('name', taskName)
  if(error) {
    console.log({error})
    notFound()
  }
  return data[0]
}

export async function getPeopleTasks(eventName:string){
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .eq('event_name', eventName)
  if(error) {
    console.log({error})
    notFound()
  }
  return data
}