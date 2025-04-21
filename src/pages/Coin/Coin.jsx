import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

function Coin() {
  const { id } = useParams();
  const { currency } = useContext(CoinContext);
  // console.log(id)
  const [coinData, setCoinData] = useState([]);
  const [historicalData, setHistoricalData] = useState([]);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then((res) => res.json())
      .then((res) => {
        setCoinData(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
  method: 'GET',
  headers: {accept: 'application/json'}
};

fetch(
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10`,
  options
)
  .then((res) => res.json())
  .then((res) => {
    setHistoricalData(res);
    // console.log(res);
  })
  .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, id]);

  if (coinData) {
    return (
      <div className="coin">
        <div className="coin-name">
          {coinData.image && (
            <img src={coinData.image.large} alt="coin photo" />
          )}
          <p>
            <b>
              {coinData.name} ({coinData.symbol})
            </b>
          </p>
        </div>

        <div className="coin-info">
          <div className="market-info">
            <div className="info-item">
              <p className="label">Circulating Supply</p>
              <p className="value">
                {coinData.market_data?.circulating_supply?.toLocaleString() ||
                  "N/A"}
              </p>
            </div>
          </div>

          <div className="description">
            <h2>About</h2>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  coinData.description?.en?.split(". ").slice(0, 3).join(". ") +
                    "." || "No description available.",
              }}
            ></p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="loading page">Loading...</div>;
  }
}

export default Coin;
