import { useState } from "react";
import DeviceForm from "../components/DeviceForm";
import DeviceList from "../components/DeviceList";

export default function DevicesPage() {
    const [editableDevice, setEditableDevice] = useState(null);
    const [reload, setReload] = useState(false);

    return (
        <div>
            <h1 className="mb-4">Пристрої сервісного центру</h1>

            <DeviceForm
                editableDevice={editableDevice}
                onSuccess={() => {
                    setEditableDevice(null);
                    setReload(prev => !prev);
                }}
            />

            <DeviceList key={reload} onEdit={d => setEditableDevice(d)} />
        </div>
    );
}
