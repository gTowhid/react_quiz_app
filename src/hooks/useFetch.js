import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const requestFetch = async () => {
            const options = {
                method: 'GET',
                headers: {
                    // eslint-disable-next-line prettier/prettier
                    Authorization: process.env.REACT_APP_PEXELS_API_KEY,
                },
            };

            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, options);
                /* const response = await fetch(url, {
                    mode: 'no-cors',
                    method: method || 'GET',
                    headers,
                    url,
                }); */
                const data = await response.json();
                setLoading(false);
                setResult(data);
                console.log(response);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        };
        requestFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        loading,
        error,
        result,
    };
}
