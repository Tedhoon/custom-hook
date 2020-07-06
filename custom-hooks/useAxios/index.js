import React from "react";
import useAxios from "./useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `Loading: ${loading} \nData: ${JSON.stringify(data)} \nError: ${error}`
  );
  return (
    <div className="App">
      <>
        {data && data.status}
        {loading && "Loading"}
        <button onClick={refetch}>refetch</button>
      </>
    </div>
  );
}

export default App;
