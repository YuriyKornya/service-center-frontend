import { useState, useEffect } from "react";
import { createClient, updateClient } from "../api/ClientService";

export default function ClientForm({ editableClient, onSuccess }) {

    const [client, setClient] = useState({
        fullName: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        if (editableClient) setClient(editableClient);
    }, [editableClient]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (client.id) {
            updateClient(client.id, client).then(onSuccess);
        } else {
            createClient(client).then(onSuccess);
        }
    };

    return (
        <form className="card card-body mb-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">
                {client.id ? "Редагувати клієнта" : "Додати клієнта"}
            </h4>

            <input
                className="form-control mb-2"
                type="text"
                placeholder="ПІБ"
                value={client.fullName}
                onChange={e => setClient({ ...client, fullName: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Телефон"
                value={client.phone}
                onChange={e => setClient({ ...client, phone: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="email"
                placeholder="Email"
                value={client.email}
                onChange={e => setClient({ ...client, email: e.target.value })}
            />

            <button className="btn btn-success">Зберегти</button>
        </form>
    );
}
