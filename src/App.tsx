import Header from "./components/Header"
import { useState } from "react"
import type { ServiceOrder } from "./types/ServiceOrder";
import NewServiceForm from "./components/NewServiceForm";
import ServiceCard from "./components/ServiceCard";

export default function App() {
  const [lista, setLista] = useState<ServiceOrder[]>([]);
  
  function adicionarOS(novaOs: ServiceOrder) {
    setLista([...lista, novaOs]);
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <NewServiceForm onSubmit={adicionarOS} />
      <div className="flex flex-wrap gap-3 p-4">
        {lista.map((os) => (
          <ServiceCard key={os.id} {...os} />
        ))}
      </div>
    </div>
  )
}