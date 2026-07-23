import { useState } from "react";
import type { NewServiceOrder } from "../types/ServiceOrder";
import type { Client } from "../types/Client";

interface Props {
  clients: Client[];
  onSubmit: (os: NewServiceOrder) => void;
}

function NewServiceForm({ clients, onSubmit }: Props) {
  const [clientId, setClientId] = useState("");
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");

  function handleSubmit() {
    if (!clientId) return;
    const novaOs: NewServiceOrder = {
      clientId: Number(clientId),
      device: device,
      issue: issue,
      status: "open",
    };
    onSubmit(novaOs);
    setClientId("");
    setDevice("");
    setIssue("");
  }

  return (
    <div className="flex gap-2 p-4">
      <select
        className="border rounded p-2 flex-1"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
      >
        <option value="">Selecione um cliente</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>
      <input
        className="border rounded p-2 flex-1"
        type="text"
        placeholder="Dispositivo do cliente"
        value={device}
        onChange={(e) => setDevice(e.target.value)}
      />
      <input
        className="border rounded p-2 flex-1"
        type="text"
        placeholder="Problema do dispositivo"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />
      <button
        className="border rounded bg-blue-500 font-bold text-white p-2"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </div>
  );
}

export default NewServiceForm;