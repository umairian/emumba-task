import React, { useEffect, useState } from 'react'
import config from '../config';

export default function useCategoryApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [active, setActive] = useState(null);
    
    async function getCategoriesApi() {
        setIsLoading(true);
        try {
            const json = await fetch(`${config.BASE_URL}/api/v1/categories`, {
                method: "GET",
                "Content-Type": "application/json",
            });
            const data = await json.json();

            setData(data);
            setActive(data[0].name)
        } catch (err) {
            console.log(err)
            setError(err);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCategoriesApi();
    }, []);

    return { data, isLoading, error, active, setActive };
}