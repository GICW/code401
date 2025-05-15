import { useState, useEffect } from "react";
import axios from 'axios';

const useAxios = () => {

  const [config, makeRequest] = useState({});
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    async function callApi(){
      try {
        const res = await axios(config);
        setResponse(res.data);
      } catch(e){
        setError(e)
      }
    }
    callApi();
  }, [config]);

  return { makeRequest, response, error }

}

export default useAxios;
