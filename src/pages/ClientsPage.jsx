import { useState } from "react";
import ClientList from "../components/ClientList";
import ClientForm from "../components/ClientForm";

export default function ClientsPage() {
    const [editableClient, setEditableClient] = useState(null);
    const [reload, setReload] = useState(false);

    return (
        <div>
            <h1>Клієнти сервісного центру</h1>

            <ClientForm
                editableClient={editableClient}
                onSuccess={() => {
                    setEditableClient(null);
                    setReload(!reload);
                }}
            />

            <ClientList key={reload} onEdit={client => setEditableClient(client)} />
        </div>
    );
}
