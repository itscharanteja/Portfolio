import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "./portfoliolist/PortfolioList";
import {
  featuredPortfolio,
  gamesPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web" },
    { id: "game", title: "Game" },
    { id: "mobile", title: "Mobile" },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;

      case "game":
        setData(gamesPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              id={item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank" rel="noreferrer">
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
