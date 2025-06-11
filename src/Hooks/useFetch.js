import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        if (!url) return;

        let isMounted = true;

        const getData = async () => {
            setIsLoading(true);
            setFetchError(null);

            try {
                const res = await fetch(url, options);
                const json = await res.json();
                if (isMounted) {
                    setData(json);
                    logFetch(json, res.status);
                }
            } catch (e) {
                if (isMounted) {
                    setFetchError(e?.message || 'Fetch error');
                    logFetch(options?.body, 'FETCH_ERROR');
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        getData();

        return () => { isMounted = false; };
    }, [url, JSON.stringify(options)]);

    return { data, loading: isLoading, error: fetchError };
};

function logFetch(payload, status) {
    const prevLogs = JSON.parse(localStorage.getItem('fetchLogs') || '[]');
    prevLogs.push({
        time: new Date().toISOString(),
        payload: payload ?? null,
        status,
    });
    localStorage.setItem('fetchLogs', JSON.stringify(prevLogs));
}

export default useFetch;