import { useState, useEffect } from 'react';

function CurrencyData(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))  // issue is line ki thi
            .catch((error) => {
                console.error('Fetch error:', error);
            });
        }, [currency]);
    console.log(data)
    return data;
}

export default CurrencyData;
