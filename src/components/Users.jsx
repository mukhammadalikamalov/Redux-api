import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../core/redux/fetch/action";

const Users = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData("https://jsonplaceholder.typicode.com/users"));
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.length === 0) return <div>No data available</div>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Username:</strong> {user.username}</p>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
