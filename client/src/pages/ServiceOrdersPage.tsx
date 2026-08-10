import { useState, useEffect } from "react";
import type { ServiceOrder, NewServiceOrder } from "../types/ServiceOrder";
import type { Client } from "../types/Client";
import ServiceCard from "../components/ServiceCard";
import NewServiceForm from "../components/NewServiceForm";
import api from "../services/api";

function ServiceOrdersPage() {
  const [serviceOrders, setServiceOrders] = useState<ServiceOrder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [ordersResponse, clientsResponse] = await Promise.all([
          api.get<ServiceOrder[]>("/service-orders"),
          api.get<Client[]>("/clients"),
        ]);
        setServiceOrders(ordersResponse.data);
        setClients(clientsResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  async function handleCreate(newOs: NewServiceOrder) {
    try {
      const response = await api.post<ServiceOrder>("/service-orders", newOs);
      setServiceOrders([...serviceOrders, response.data]);
    } catch (error) {
      console.error("Erro ao criar ordem de serviço:", error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await api.delete(`/service-orders/${id}`);
      setServiceOrders(serviceOrders.filter((os) => os.id !== id));
    } catch (error) {
      console.error("Erro ao remover ordem de serviço:", error);
    }
  }

  if (loading) {
    return <p className="p-4">Carregando ordens de serviço...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Ordens de Serviço</h2>
      <NewServiceForm clients={clients} onSubmit={handleCreate} />
      <div className="flex flex-wrap gap-3">
        {serviceOrders.map((os) => (
          <ServiceCard key={os.id} {...os} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default ServiceOrdersPage;