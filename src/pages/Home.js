import React from 'react'

const Home = () => {
  const auth = "563492ad6f91700001000001cd899c335aea4bf29dd2b9393c8c387d";
  const initialURL =  "https://api.pexels.com/videos/search?query=bank&per_page=1"

  const getVideo = async () => {
    const dataFetch = await fetch(initialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    console.log(parsedData);
  }

  return (
    <div>
      <h1>this is home</h1>
      
    </div>
  )
}

export default Home
