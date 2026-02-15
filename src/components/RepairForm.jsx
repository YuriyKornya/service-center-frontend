import { useState, useEffect } from "react";
import { createRepair, updateRepair } from "../api/RepairService";
import { getDevices } from "../api/DeviceService";
import { getEmployees } from "../api/EmployeeService";

export default function RepairForm({ editableRepair, onSuccess }) {
    const [repair, setRepair] = useState({
        problemDescription: "",
        status: "",
        cost: "",
        device: { id: 0 },
        employee: { id: 0 }
    });

    const [devices, setDevices] = useState([]);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if (editableRepair) setRepair(editableRepair);

        getDevices().then(r => setDevices(r.data));
        getEmployees().then(r => setEmployees(r.data));
    }, [editableRepair]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (repair.id) {
            updateRepair(repair.id, repair).then(onSuccess);
        } else {
            createRepair(repair).then(onSuccess);
        }
    };

    return (
        <form className="card card-body mb-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">
                {repair.id ? "Редагувати ремонт" : "Створити ремонт"}
            </h4>

            <textarea
                className="form-control mb-2"
                placeholder="Опис проблеми"
                value={repair.problemDescription}
                onChange={e => setRepair({ ...repair, problemDescription: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Статус (Прийнято, В роботі, Готово...)"
                value={repair.status}
                onChange={e => setRepair({ ...repair, status: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="number"
                placeholder="Вартість, грн"
                value={repair.cost}
                onChange={e => setRepair({ ...repair, cost: Number(e.target.value) })}
            />

            <select
                className="form-select mb-2"
                value={repair.device?.id ?? 0}
                onChange={e => setRepair({ ...repair, device: { id: Number(e.target.value) } })}
            >
                <option value="0">Оберіть пристрій</option>
                {devices.map(d => (
                    <option key={d.id} value={d.id}>
                        {d.type} — {d.model}
                    </option>
                ))}
            </select>

            <select
                className="form-select mb-3"
                value={repair.employee?.id ?? 0}
                onChange={e => setRepair({ ...repair, employee: { id: Number(e.target.value) } })}
            >
                <option value="0">Оберіть працівника</option>
                {employees.map(emp => (
                    <option key={emp.id} value={emp.id}>
                        {emp.fullName} ({emp.position})
                    </option>
                ))}
            </select>

            <button className="btn btn-success">Зберегти</button>
        </form>
    );
}
