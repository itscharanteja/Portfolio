import React, { useState } from "react";
import "./works.scss";

export default function Works() {
  const data = [
    {
      id: 1,
      title: "Blood Bank",
      img: "assets/project-blood.png",
      icon: "assets/www.png",
      desc: "A blood bank is a facility that collects, tests, processes, stores, and distributes blood and blood products to be used for transfusions. It serves as a critical component of healthcare systems, ensuring the availability of safe and compatible blood for patients in need.",
    },
    {
      id: 2,
      title: "User To-Do List",
      img: "data:image/jpeg;base64,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",
      icon: "assets/www.png",
      desc: "A `to-do list` is a simple yet effective organizational tool used by individuals to keep track of tasks, activities, and goals they need to complete. It is a list of items, typically written or typed out, that outlines the things a person wants or needs to accomplish within a specific time frame.",
    },
    {
      id: 3,
      title: "StopWatch App",
      img: "assets/project-stop.png",
      icon: "assets/cell-phone.png",
      desc: "A stopwatch app is a app used to count the elapsed time of an event, task, or activity with a high degree of accurancy.",
    },
    {
      id: 4,
      title: "Tic-Tac-Toe",
      img: "assets/project-tic.png",
      icon: "assets/game.png",
      desc: "Tic-Tac-Toe, also known as Noughts and Crosses or Xs and Os, is a classic paper-and-pencil or board game typically played by two players. ",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => {
          handleClick("left");
        }}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => {
          handleClick("right");
        }}
      />
    </div>
  );
}
