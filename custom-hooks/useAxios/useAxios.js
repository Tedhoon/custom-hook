import defaultAxios from "axios";
import React, { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
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

export default useAxios;
