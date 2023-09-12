import React, { useEffect, useState } from 'react'
import config from '../config';

export default function useProductApi() {
    console.log(import.meta.env)
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    async function getProductsApi() {
        try {
            const json = await fetch(`${config.BASE_URL}/api/v1/products`, {
                method: "GET",
                "Content-Type": "application/json",
            });
            const data = await json.json();

            setData(data);
        } catch (err) {
            console.log(err)
            setError(err);
        }
    }

    useEffect(() => {
        getProductsApi();
    }, []);

    return { data, isLoading, error };
}