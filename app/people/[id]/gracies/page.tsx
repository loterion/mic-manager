import Link from "next/link"

export default async function People({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <>
      <h3 className="font-bold">
        <span className="text-4xl bg-black text-white">Gràcies!</span><br />
      </h3>
      <Link href={`/people/${id}`}><span className="font-bold text-white bg-black">Afegir un altre assistent 👉</span></Link>
    </>
  )
}