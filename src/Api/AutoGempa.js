import { useQuery } from "react-query";
import axios from "axios";

const GetDataGempa = () => {
  return useQuery("Infogempa", async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_GEMPA, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "X-Requested-With": "XMLHttpRequest",
      },
      method: "GET",
      withCredentials: false,
      responseType: "json",
      proxy: {
        host: "localhost",
        port: 3000,
      },
      
    });
    return data;
  });
}

export default GetDataGempa;
