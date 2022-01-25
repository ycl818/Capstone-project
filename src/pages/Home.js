import React, { useState } from "react";
import { ReactComponent as ReactLogo } from "../images/undraw_revenue_re_2bmg.svg";
import { ReactComponent as ReactLogo2 } from "../images/2.svg";
import logo3 from "../images/Refund.gif";
import Goochart from "../components/Goochart";

const Home = () => {
  // const auth = "563492ad6f917000010000016b41c525d3b54b06917648c4bb8cf716";
  // const initialURL =
  //   "https://api.pexels.com/videos/search?query=nature&per_page=2";

  // let [video, setVideo] = useState([]);

  // const getVideo = async () => {
  //   const dataFetch = await fetch(initialURL, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: auth,
  //     },
  //   });
  //   let parsedData = await dataFetch.json();
  //   console.log(parsedData);
  //   //setVideo(parsedData.videos)
  // };

  return (
    <div>
      <h1>Exchange your Currency</h1>
      <ReactLogo className="reactlogo" style={{ height: "20vmin" }} />
      <ReactLogo2 className="reactlogo" style={{ height: "20vmin" }} />
      <img src={logo3} alt="no img" />
      <Goochart />
    </div>
  );
};

export default Home;
