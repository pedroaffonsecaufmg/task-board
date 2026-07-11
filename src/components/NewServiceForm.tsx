import { useState } from "react";
import type { OrdemDeServico } from "../types/OrdemDeServico";
interface Props{
onSubmit: (os:OrdemDeServico) => void
}
function NewServiceForm({onSubmit}:Props){
    const [nomeCliente, setNomeCliente] = useState ('');
    const [modelo, setModelo] = useState ('');
    const [defeito, setDefeito] = useState ('');
    function handleSubmit(){
        const novaOs : OrdemDeServico = {
            id: Date.now(),
            nomeCliente: nomeCliente,
            modelo: modelo,
            status: "Aberto",
            defeito: defeito,
        }
        onSubmit(novaOs)
        setNomeCliente('');
        setModelo('');
        setDefeito('');
    }
 return(
    <div className="flex gap-2 p-4">
        <input className="border rounded p-2 flex-1" type='text' placeholder="Nome do cliente" value={nomeCliente} onChange={(e)=>setNomeCliente(e.target.value)}/>
        <input className="border rounded p-2 flex-1" type='text' placeholder="Dispositivo do cliente" value={modelo} onChange={(e)=> setModelo(e.target.value)}/>
        <input className="border rounded p-2 flex-1" type='text' placeholder="Problema do dispositivo" value={defeito} onChange={(e)=>setDefeito(e.target.value)}/>
        <button className="border border-black rounded p-2 bg-blue-500 font-bold text-white" onClick={handleSubmit}>Enviar</button>
    </div>
 );
}

export default NewServiceForm;