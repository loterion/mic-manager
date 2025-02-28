import EventForm from "./components/EventForm";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">Crea un nou esdeveniment</h1>
      <EventForm />
    </>
  );
}