import React, { useRef, useEffect } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const strings = [
      'console.log("Hello, World!");',
      'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      'print("Hello world!)',
    ];

    init(textRef.current, {
      showCursor: true,
      loop: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: strings,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Subject.png" alt="user" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Charan</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
