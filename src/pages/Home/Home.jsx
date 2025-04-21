import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin); 
    }
  };
const searchHandler= (e)=>{
  e.preventDefault();
  const filteredCoins = allCoin.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );
  setDisplayCoin(filteredCoins);
}

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1>
            Largest <br />
            Crypto Marketplace
          </h1>
          <p>
            Welcome to the world's largest cryptocurrency marketplace. Sign up
            to explore more about cryptos.
          </p>
          <form onSubmit={searchHandler}>
            <input
              type="text"
              placeholder="Search for coins..."
              value={input}
              list="coinList"
              onChange={inputHandler}
            />
            <datalist id="coinList">
              {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
            </datalist>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="crypto-table">
          <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{ textAlign: "center" }}>24H Change</p>
            <p style={{ textAlign: "right" }}>Market Cap</p>
          </div>
          {Array.isArray(displayCoin) &&
            displayCoin.slice(0, 10).map((item, index) => (
              <Link to={`coin/${item.id}`} className="table-layout" key={index}>
                <p>{item.market_cap_rank}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img
                    src={item.image}
                    alt="coin"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>{item.name}</p>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <p>{currency.symbol}</p>
                  <p>{item.current_price.toLocaleString()}</p>
                </div>
                <p
                  style={{
                    textAlign: "center",
                    color:
                      Math.floor(item.price_change_percentage_24h * 100) > 0
                        ? "green"
                        : Math.floor(item.price_change_percentage_24h * 100) < 0
                        ? "red"
                        : "gray",
                  }}
                >
                  {Math.floor(item.price_change_percentage_24h * 100)}%
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "flex-end",
                  }}
                >
                  <p>{currency.symbol}</p>
                  <p> {item.market_cap.toLocaleString()}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
