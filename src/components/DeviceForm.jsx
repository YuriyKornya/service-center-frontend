import { useState, useEffect } from "react";
import { createDevice, updateDevice } from "../api/DeviceService";
import { getClients } from "../api/ClientService";

export default function DeviceForm({ editableDevice, onSuccess }) {
    const [device, setDevice] = useState({
        type: "",
        model: "",
        serialNumber: "",
        client: { id: 0 }
    });

    const [clients, setClients] = useState([]);

    useEffect(() => {
        if (editableDevice) setDevice(editableDevice);

        getClients().then(r => setClients(r.data));
    }, [editableDevice]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (device.id) {
            updateDevice(device.id, device).then(onSuccess);
        } else {
            createDevice(device).then(onSuccess);
        }
    };

    return (
        <form className="card card-body mb-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">
                {device.id ? "Редагувати пристрій" : "Додати пристрій"}
            </h4>

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Тип (наприклад, телефон)"
                value={device.type}
                onChange={e => setDevice({ ...device, type: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Модель"
                value={device.model}
                onChange={e => setDevice({ ...device, model: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Серійний номер"
                value={device.serialNumber}
                onChange={e => setDevice({ ...device, serialNumber: e.target.value })}
            />

            <select
                className="form-select mb-3"
                value={device.client?.id ?? 0}
                onChange={e =>
                    setDevice({
                        ...device,
                        client: { id: Number(e.target.value) }
                    })
                }
            >
                <option value="0">Оберіть клієнта</option>
                {clients.map(c => (
                    <option key={c.id} value={c.id}>
                        {c.fullName} ({c.phone})
                    </option>
                ))}
            </select>

            <button className="btn btn-success">Зберегти</button>
        </form>
    );
}
