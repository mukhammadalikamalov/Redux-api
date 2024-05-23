import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../core/redux/fetch/action";

const Todos = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData("https://jsonplaceholder.typicode.com/todos"));
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.length === 0) return <div>No data available</div>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <p><strong>ID</strong> {item.id}</p>
                        <p><strong>Title:</strong> {item.title}</p>
                        <p><strong>Completed:</strong> {item.completed ? "Yes" : "No"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
