
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
  {
    name: "楽天",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Rakuten_Global_Brand_Logo.svg",
    baseUrl: "https://search.rakuten.co.jp/search/mall/",
  },
  {
    name: "ヤフオク",
    logo: "https://auctions.yahoo.co.jp/favicon.ico",
    baseUrl: "https://auctions.yahoo.co.jp/search/search?p=",
  },
  {
    name: "メルカリ",
    logo: "https://static.mercdn.net/images/logo/mercari_logo.png",
    baseUrl: "https://www.mercari.com/jp/search/?keyword=",
  },
  {
    name: "ジモティー",
    logo: "https://jmty.jp/favicon.ico",
    baseUrl: "https://jmty.jp/all/sale?keyword=",
    }
  {
    name: "Amazon",
    logo: "https://www.amazon.co.jp/favicon.ico",
    baseUrl: "https://www.amazon.co.jp/s?k=",
  }
  ];

  const manualSites = [
  {
    name: "モノタロウ",
    logo: "https://www.monotaro.com/favicon.ico",
    baseUrl: "https://www.monotaro.com/s/?keyword=",
  },
  {
    name: "カーセンサー",
    logo: "https://www.carsensor.net/favicon.ico",
    baseUrl: "https://www.carsensor.net/usedcar/search.php?KEYWORD=",
  },
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
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "center", width: "120px" }}
            >
              <img src={site.img} alt={site.name} style={{ width: "100%", maxHeight: "80px", objectFit: "contain" }} />
              <div style={{ marginTop: "0.5rem", color: "#333", fontSize: "0.9rem" }}>{site.name}</div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
