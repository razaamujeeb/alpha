
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
  const sites = [
    { name: "楽天", url: `https://search.rakuten.co.jp/search/mall/${encodedQuery}/`, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Rakuten_logo.svg" },
    { name: "ヤフオク", url: `https://auctions.yahoo.co.jp/search/search?p=${encodedQuery}`, img: "https://upload.wikimedia.org/wikipedia/commons/6/62/%E3%83%A4%E3%83%95%E3%82%AA%E3%82%AF%EF%BC%81.svg" },
    { name: "メルカリ", url: `https://jp.mercari.com/search?keyword=${encodedQuery}`, img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Mercari_logo.svg" },
    { name: "ジモティー", url: `https://jmty.jp/all/sale?keyword=${encodedQuery}`, img: "https://sharing-economy.jp/ja/wp-content/uploads/2023/06/jmty_logo_A-300x82.jpg" },
    { name: "モノタロウ", url: `https://www.monotaro.com/s/?word=${encodedQuery}`, img: "https://www.monotaro.com/favicon.ico" },
    { name: "カーセンサー", url: `https://www.carsensor.net/parts/search.php?KW=${encodedQuery}`, img: "https://www.carsensor.net/favicon.ico" },
    { name: "Amazon", url: `https://www.amazon.co.jp/s?k=${encodedQuery}`, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
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
