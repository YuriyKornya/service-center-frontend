import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

export default function EmployeesPage() {
    const [editableEmployee, setEditableEmployee] = useState(null);
    const [reload, setReload] = useState(false);

    return (
        <div>
            <h1 className="mb-4">Працівники сервісного центру</h1>

            <EmployeeForm
                editableEmployee={editableEmployee}
                onSuccess={() => {
                    setEditableEmployee(null);
                    setReload(prev => !prev);
                }}
            />

            <EmployeeList key={reload} onEdit={employee => setEditableEmployee(employee)} />
        </div>
    );
}
