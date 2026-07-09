import { useState } from "react";

function NewServiceForm(){
    const [nomeCliente, setNomeCliente] = useState ('');
    const [modelo, setmodelo] = useState ('');
    const [defeito, setDefeito] = useState ('');
 return(
    <div>
        <input type='text' placeholder="Nome do cliente" value={nomeCliente} onChange={(e)=>setNomeCliente(e.target.value)}/>
        <input type='text' placeholder="Dispositivo do cliente" value={modelo} onChange={(e)=> setmodelo(e.target.value)}/>
        <input type='text' placeholder="Problema do dispositivo" value={defeito} onChange={(e)=>setDefeito(e.target.value)}/>
        <button>Enviar</button>
    </div>
 );
}

export default NewServiceForm;