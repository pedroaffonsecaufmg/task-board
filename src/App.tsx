import Header from "./components/Header"
import {useState} from "react"
import type {OrdemDeServico} from "./types/OrdemDeServico";
import NewServiceForm from "./components/NewServiceForm";
import ServiceCard from "./components/ServiceCard";

export default function App() {
  const [lista, setLista] = useState<OrdemDeServico[]>([]);
  return (
    <div> 
      <Header />
      <NewServiceForm />
      {lista.map((os)=> (
        <ServiceCard key={os.id} {...os}/>
      ))}
    </div>

  )
}