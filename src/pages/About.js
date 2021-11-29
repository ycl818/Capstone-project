import React from "react";

function About() {
  const key = "79a269e6c395f3b1f87ec6ca";
  const usdURL = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;

  // fetch data from pexel api
  const calculate = () => {
    fetch(usdURL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.conversion_rates["TWD"]);
        const rate = data.conversion_rates["TWD"];
      });
  };

  calculate();

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>About</h1>
      <label htmlFor="">USD:</label>
      <input type="number" />
      <button>transfer</button>
      <label htmlFor="">TWD:</label>
      <input type="number" />
      
    </div>
  );
}



export default About;
