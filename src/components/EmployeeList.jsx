import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/EmployeeService";

export default function EmployeeList({ onEdit }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        getEmployees().then(r => setEmployees(r.data));
    };

    const handleDelete = (id) => {
        deleteEmployee(id).then(loadData);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-3">Список працівників</h4>

                <table className="table table-striped table-bordered mb-0">
                    <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>ПІБ</th>
                        <th>Посада</th>
                        <th>Телефон</th>
                        <th width="160">Дії</th>
                    </tr>
                    </thead>

                    <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.fullName}</td>
                            <td>{emp.position}</td>
                            <td>{emp.phone}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(emp)}
                                >
                                    Редагувати
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(emp.id)}
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
