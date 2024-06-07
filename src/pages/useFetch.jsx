import { useEffect, useState } from "react";

export const useFetch = (url, show) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isEmpty, setEmpty] = useState(false);

    useEffect(() => {
        // check if the given URL is not empty and the user click the button to generate the QR code
        if (url && show) {
            // create controller to controle the fetch when Aborted
            const controler = new AbortController();
            const signal = controler.signal;

            // loading and the url is not Empty
            setLoading(true);
            setEmpty(false);
            
            fetch(
                `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=[200]x[200]`,
                { signal }
            )
                .then((res) => setData(res.url))
                .catch((err) => {
                    if (err.name !== "AbortError") {
                        setError(err.message);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });

            return () => {
                controler.abort();
            };
        } else {
            setEmpty(true);
            setLoading(false);
            setData(null);
        }
    }, [url, show]);
    return { data, error, loading, isEmpty };
};
