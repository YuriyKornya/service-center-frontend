import { useEffect, useState } from "react";
import { getClients, deleteClient } from "../api/ClientService";

export default function ClientList({ onEdit }) {

    const [clients, setClients] = useState([]);

    useEffect(() => load(), []);

    const load = () => {
        getClients().then(r => setClients(r.data));
    };

    return (
        <table className="table table-striped table-bordered">
            <thead className="table-primary">
                <tr>
                    <th>ID</th>
                    <th>ПІБ</th>
                    <th>Телефон</th>
                    <th>Email</th>
                    <th width="150">Дії</th>
                </tr>
            </thead>

            <tbody>
                {clients.map(c => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.fullName}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => onEdit(c)}
                            >
                                Редагувати
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteClient(c.id).then(load)}
                            >
                                Видалити
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
