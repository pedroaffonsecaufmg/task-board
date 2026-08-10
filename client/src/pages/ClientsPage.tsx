import { useState, useEffect } from "react";
import type { Client, NewClient } from "../types/Client";
import NewClientForm from "../components/NewClientForm";
import api from "../services/api";

function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await api.get<Client[]>("/clients");
        setClients(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchClients();
  }, []);

  async function handleCreate(newClient: NewClient) {
    try {
      const response = await api.post<Client>("/clients", newClient);
      setClients([...clients, response.data]);
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await api.delete(`/clients/${id}`);
      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      console.error("Erro ao remover cliente:", error);
    }
  }

  if (loading) {
    return <p className="p-4">Carregando clientes...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      <NewClientForm onSubmit={handleCreate} />
      <div className="flex flex-wrap gap-3">
        {clients.map((client) => (
          <div key={client.id} className="bg-gray-100 rounded shadow p-4 w-56">
            <p className="font-bold">{client.name}</p>
            <p>{client.phone}</p>
            <p>{client.email}</p>
            <button
              className="bg-red-500 text-white rounded px-2 py-1 mt-2"
              onClick={() => handleDelete(client.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsPage;