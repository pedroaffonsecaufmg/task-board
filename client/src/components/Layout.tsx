import { Outlet, Link} from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <nav className="flex gap-4 p-4 bg-white shadow">
        <Link to="/">Dashboard</Link>
        <Link to="/clients">Clientes</Link>
        <Link to="/service-orders">Ordens de Serviço</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;