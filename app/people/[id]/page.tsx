import PeopleForm from "../../components/PeopleForm"

export default async function People({ params }: { params: { id: string } }) {
  const { id } = await params
  return (
    <>
      <h3 className="text-5xl bg-black text-white font-bold">{`${decodeURI(id)}`}</h3>
      <h4 className="text-2xl font-bold">Alta de participants</h4>
      <PeopleForm id={id} />
    </>
  )
}