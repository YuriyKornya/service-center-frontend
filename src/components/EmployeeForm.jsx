import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../api/EmployeeService";

export default function EmployeeForm({ editableEmployee, onSuccess }) {
    const [employee, setEmployee] = useState({
        fullName: "",
        position: "",
        phone: ""
    });

    useEffect(() => {
        if (editableEmployee) setEmployee(editableEmployee);
    }, [editableEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (employee.id) {
            updateEmployee(employee.id, employee).then(onSuccess);
        } else {
            createEmployee(employee).then(onSuccess);
        }
    };

    return (
        <form className="card card-body mb-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">
                {employee.id ? "Редагувати працівника" : "Додати працівника"}
            </h4>

            <input
                className="form-control mb-2"
                type="text"
                placeholder="ПІБ"
                value={employee.fullName}
                onChange={e => setEmployee({ ...employee, fullName: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Посада"
                value={employee.position}
                onChange={e => setEmployee({ ...employee, position: e.target.value })}
            />

            <input
                className="form-control mb-2"
                type="text"
                placeholder="Телефон"
                value={employee.phone}
                onChange={e => setEmployee({ ...employee, phone: e.target.value })}
            />

            <button className="btn btn-success">Зберегти</button>
        </form>
    );
}
