
"use client";
import React, { useState } from "react";

export default function Page() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const encodedQuery = encodeURIComponent(query);
  const mainSites = [
    { name: "楽天", url: `https://search.rakuten.co.jp/search/mall/${encodedQuery}/`, img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Rakuten_Global_Brand_Logo.svg" },
    { name: "ヤフオク", url: `https://auctions.yahoo.co.jp/search/search?p=${encodedQuery}`, img: "https://auctions.yahoo.co.jp/favicon.ico" },
    { name: "メルカリ", url: `https://jp.mercari.com/search?keyword=${encodedQuery}`, img: "https://static.mercdn.net/images/logo/mercari_logo.png" },
    { name: "ジモティー", url: `https://jmty.jp/all/sale?keyword=${encodedQuery}`, img: "https://jmty.jp/favicon.ico" },
    { name: "Amazon", url: `https://www.amazon.co.jp/s?k=${encodedQuery}`, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }
  ];
  const manualSites = [
    { name: "モノタロウ", url: "https://www.monotaro.com/", img: "https://www.monotaro.com/favicon.ico" },
    { name: "カーセンサー", url: "https://www.carsensor.net/", img: "https://www.carsensor.net/favicon.ico" }
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", textAlign: "center", paddingTop: "4rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>alpha</h1>
      <form onSubmit={handleSubmit} style={{ margin: "2rem auto" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="例: ホンダ N-one 2016 フロントバンパー"
          style={{
            padding: "0.5rem 1rem",
            width: "300px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "0.5rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#0070f3",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {submitted && (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
            {mainSites.map((site, index) => (
              <div key={index} style={{ textAlign: "center", width: "120px" }}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <img src={site.img} alt={site.name} style={{ width: "100%", maxHeight: "80px", objectFit: "contain" }} />
                </a>
                <div style={{ marginTop: "0.5rem", color: "#333", fontSize: "0.9rem" }}>{site.name}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "1rem" }}>以下手動</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
              {manualSites.map((site, index) => (
                <div key={index} style={{ textAlign: "center", width: "100px" }}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <img src={site.img} alt={site.name} style={{ width: "100%", maxHeight: "60px", objectFit: "contain" }} />
                  </a>
                  <div style={{ marginTop: "0.3rem", color: "#555", fontSize: "0.8rem" }}>{site.name}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
