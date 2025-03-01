import * as R from 'ramda'
import z from 'zod'
import { PersonFormSchema } from '../components/PeopleForm'

function getCalzotsAmount(data: z.infer<typeof PersonFormSchema>[]): number {
  const adultsCount = R.reduce((acc, i) => i.child ? acc : acc + 1, 0, data)
  const childCount = R.reduce((acc, i) => i.child ? acc + 1 : 0, 0, data)
  console.log({adultsCount, childCount})
  return (adultsCount * 20) + (childCount * 10)
}

function getDrinksAmount(data: z.infer<typeof PersonFormSchema>[]){
  const drinkConversion = {
    'aigua': 0.5,
    'cola': 0.5,
    'llimonada': 0.5,
    'trina': 0.5,
    'acuarius': 0.5,
    'nestea': 0.5,
    'cervessa': 1,
    'vi_blanc': 0.5,
    'vi_negre': 0.5,
    'vermut': 0.3
  }

  return R.pipe(
    R.reduce((acc, i) => [...acc, ...i.drinks], []),
    R.countBy(R.identity),
    R.mapObjIndexed((value, key) => (value * drinkConversion[key]).toFixed(1))
  )(data)
}

function getMeatAmount(data: z.infer<typeof PersonFormSchema>[]) {
  const meatConversion = {
    xai: 0.1,
    botifarra: 0.1,
    botifarra_negre: 0.1,
    papada: 0.1,
    careta: 0.1,
    xoriço: 0.1,
    txistorra: 0.1,
    bou: 0.1,
  }

  return R.pipe(
    R.reduce((acc, i) => [...acc, ...i.meat], []),
    R.countBy(R.identity),
    R.mapObjIndexed((value, key) => (meatConversion[key] * value).toFixed(1))
  )(data)
}

export function getShoppingList(data: z.infer<typeof PersonFormSchema>[]){
  return {
    calzots: getCalzotsAmount(data),
    drinks: getDrinksAmount(data),
    meat: getMeatAmount(data)
  }
}