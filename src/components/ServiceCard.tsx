import type { OrdemDeServico } from "../types/OrdemDeServico";

function ServiceCard({id, nomeCliente, modelo, defeito, status}: OrdemDeServico){
return(<div className = "bg-gray-100 rounded shadow p-4 m-4 w-56">
    <p>{nomeCliente}</p>
    <p> <span className={status === 'Aberto' ? 'bg-green-500': status === 'Finalizado' ? 'bg-gray-500' : 'bg-red-500'}> {status}</span> </p>
    <p>{id}</p>
    <p>{modelo}</p>
    <p>{defeito}</p>
</div>)
}
export default ServiceCard