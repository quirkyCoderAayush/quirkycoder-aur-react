import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const lowerCaseCurrency = currency.toLowerCase(); // Convert to lowercase for the API request
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerCaseCurrency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[lowerCaseCurrency]))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;