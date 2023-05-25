import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi(url) {
  const [apiData, setApiData] = useState(null);

  async function getData() {
    const { data } = await axios.get(url);
    setApiData(data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return { apiData };
}
