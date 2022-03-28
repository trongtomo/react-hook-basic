import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url) => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // token

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        // res && res.data la dieu kien ? tra ve true : tra ve false
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setisLoading(false);
        setisError(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("rq canceled", error.message);
        } else {
          setisError(true);
          setisLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 3000);
    return () => {
      ourRequest.cancel();
    };
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};
export default useFetch;
