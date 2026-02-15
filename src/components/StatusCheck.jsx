import { useState } from "react";
import { checkRepairStatus } from "../api/RepairService";

export default function StatusCheck() {
    const [query, setQuery] = useState("");
    const [repairs, setRepairs] = useState([]);
    const [error, setError] = useState("");

    const search = () => {
        if (!query.trim()) return setError("Введіть телефон або email");

        checkRepairStatus(query)
            .then(res => {
                setRepairs(res.data);
                setError("");
            })
            .catch(() => {
                setRepairs([]);
                setError("Нічого не знайдено");
            });
    };

    return (
        <div className="container mt-5">

            <h1 className="mb-4 fw-bold">Особистий кабінет</h1>
            <h2 className="mb-4 fw-bold">Введіть телефон або email для перегляду статусу ремонту</h2>


            <div className="card p-3 mb-4">
                <div className="input-group">
                    <input
                        className="form-control"
                        placeholder="Телефон або email"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={search}>
                        Пошук
                    </button>
                </div>

                {error && <p className="text-danger mt-2">{error}</p>}
            </div>


        
            {repairs.length > 0 && (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Проблема</th>
                            <th>Статус</th>
                            <th>Ціна</th>
                        </tr>
                    </thead>

                    <tbody>
                        {repairs.map(r => (
                            <tr key={r.id}>
                                <td>{r.id}</td>
                                <td>{r.problemDescription}</td>
                                <td>{r.status}</td>
                                <td>{r.cost} грн</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
