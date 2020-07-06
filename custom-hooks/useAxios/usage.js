import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  //axios는 instance를 받아서 여러 커스텀을 할 수 있음!
  if (!opts.url) {
    return;
  }
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const refetch = () => {
    setState({ ...state, loading: true });
    setRefetchTrigger(Date.now());
    // 단순히 난수 생성
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({ ...state, loading: false, data });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [refetchTrigger]);
  return { ...state, refetch };
};

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
