import { useState } from "react";
import RepairForm from "../components/RepairForm";
import RepairList from "../components/RepairList";

export default function RepairsPage() {
    const [editableRepair, setEditableRepair] = useState(null);
    const [reload, setReload] = useState(false);

    return (
        <div>
            <h1 className="mb-4">Ремонти</h1>

            <RepairForm
                editableRepair={editableRepair}
                onSuccess={() => {
                    setEditableRepair(null);
                    setReload(prev => !prev);
                }}
            />

            <RepairList key={reload} onEdit={repair => setEditableRepair(repair)} />
        </div>
    );
}
