import type { ServiceOrder } from "../types/ServiceOrder";

interface Props extends ServiceOrder {
  onDelete: (id: number) => void;
}

function ServiceCard({ id, client_id, device, issue, status, onDelete }: Props) {
  return (
    <div className="bg-gray-100 rounded shadow p-4 m-4 w-56">
      <p>Cliente #{client_id}</p>
      <p>
        <span
          className={
            status === "open"
              ? "bg-green-500"
              : status === "done"
              ? "bg-gray-500"
              : "bg-red-500"
          }
        >
          {status}
        </span>
      </p>
      <p>{id}</p>
      <p>{device}</p>
      <p>{issue}</p>
      <button
        className="bg-red-500 text-white rounded px-2 py-1 mt-2"
        onClick={() => onDelete(id)}
      >
        Remover
      </button>
    </div>
  );
}

export default ServiceCard;