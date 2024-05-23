import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../core/redux/fetch/action";

const Photos = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData());
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
                        <span>{item.id} - </span>
                        <span>{item.title}</span>
                        <img src={item.url} alt={item.title} />
                        <img src={item.thumbnailUrl} alt={item.title + " thumbnail"} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Photos;
