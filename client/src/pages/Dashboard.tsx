import { useState, useEffect } from "react";
import type { ServiceOrder } from "../types/ServiceOrder";
import ServiceCard from "../components/ServiceCard";
import api from "../services/api";

function Dashboard() {
  const [serviceOrders, setServiceOrders] = useState<ServiceOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<ServiceOrder[]>("/service-orders");
        setServiceOrders(response.data);
      } catch (error) {
        console.error("Erro ao buscar ordens de serviço:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p className="p-4">Carregando...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {serviceOrders.length === 0 ? (
        <p>Nenhuma ordem de serviço cadastrada ainda.</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {serviceOrders.map((os) => (
            <ServiceCard key={os.id} {...os} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;