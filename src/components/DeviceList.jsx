import { useEffect, useState } from "react";
import { getDevices, deleteDevice } from "../api/DeviceService";

export default function DeviceList({ onEdit }) {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        getDevices().then(r => setDevices(r.data));
    };

    const handleDelete = (id) => {
        deleteDevice(id).then(loadData);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-3">Список пристроїв</h4>
                <table className="table table-striped table-bordered mb-0">
                    <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Тип</th>
                        <th>Модель</th>
                        <th>Серійний номер</th>
                        <th>Клієнт</th>
                        <th width="160">Дії</th>
                    </tr>
                    </thead>
                    <tbody>
                    {devices.map(d => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.type}</td>
                            <td>{d.model}</td>
                            <td>{d.serialNumber}</td>
                            <td>{d.client?.fullName ?? `ID: ${d.client?.id}`}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(d)}
                                >
                                    Редагувати
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(d.id)}
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
