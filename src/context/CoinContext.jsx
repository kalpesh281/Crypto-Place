import { useEffect } from "react";
import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    try {
      setLoading(true);
      setError(null);
      // Using the public endpoint without API key to avoid rate limiting issues
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      setAllCoin(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
      setError(err.message);
      // Keep the previous data if there's an error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
