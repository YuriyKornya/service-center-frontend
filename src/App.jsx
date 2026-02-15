import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";
import DevicesPage from "./pages/DevicesPage";
import EmployeesPage from "./pages/EmployeesPage";
import RepairsPage from "./pages/RepairsPage";
import Navbar from "./components/Navbar";
import StatusCheck from "./components/StatusCheck";



export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<ClientsPage />} />
                    <Route path="/devices" element={<DevicesPage />} />
                    <Route path="/employees" element={<EmployeesPage />} />
                    <Route path="/repairs" element={<RepairsPage />} />
                    <Route path="/personal" element={<StatusCheck />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
