import { useEffect, useState } from "react";
import { getRepairs, deleteRepair } from "../api/RepairService";

function getStatusClass(status) {
    if (!status) return "badge bg-secondary";

    const s = status.toLowerCase();

    if (s.includes("готов")) return "badge bg-success";
    if (s.includes("робот") || s.includes("в роботі")) return "badge bg-warning text-dark";
    if (s.includes("очіку") || s.includes("детал")) return "badge bg-info text-dark";

    return "badge bg-secondary";
}

export default function RepairList({ onEdit }) {
    const [repairs, setRepairs] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        getRepairs().then(r => setRepairs(r.data));
    };

    const handleDelete = (id) => {
        deleteRepair(id).then(loadData);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-3">Список ремонтів</h4>

                <table className="table table-striped table-bordered mb-0">
                    <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Проблема</th>
                        <th>Статус</th>
                        <th>Вартість</th>
                        <th>Пристрій</th>
                        <th>Працівник</th>
                        <th width="160">Дії</th>
                    </tr>
                    </thead>

                    <tbody>
                    {repairs.map(r => (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.problemDescription}</td>
                            <td>
                                <span className={getStatusClass(r.status)}>
                                    {r.status}
                                </span>
                            </td>
                            <td>{r.cost} грн</td>
                            <td>{r.device?.model}</td>
                            <td>{r.employee?.fullName}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(r)}
                                >
                                    Редагувати
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(r.id)}
                                >
                                    Видалити
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
