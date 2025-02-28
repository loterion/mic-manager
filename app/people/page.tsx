'use client'
import PeopleForm from "../components/PeopleForm"

export default function People() {
  return (
    <div className="grid items-center p-2 justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-100 flex-col gap-8 row-start-2">
        <div>
          <h1 className="text-9xl font-bold">MIC</h1>
          <h1 className="text-6xl font-bold">(Manager)</h1>
        </div>
        <h1 className="text-2xl font-bold">Alta de participant</h1>
        <PeopleForm />
      </main>
      <footer className="row-start-3 flex mt-8 text-xs flex-wrap items-center justify-center">
        by Lot Gállego
      </footer>
    </div>
  )
}