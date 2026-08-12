// src/components/NewClientForm.tsx
import { useState } from "react";
import type { NewClient } from "../types/Client";

interface Props {
  onSubmit: (client: NewClient) => void;
}

function NewClientForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    const newClient: NewClient = { name, phone, email };
    onSubmit(newClient);
    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="flex gap-2 p-4">
      <input
        className="border rounded p-2 flex-1"
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border rounded p-2 flex-1"
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="border rounded p-2 flex-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

export default NewClientForm;