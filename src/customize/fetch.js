import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url) => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(url);
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
      }
      fetchData();
    } catch (error) {
      setisError(true);
      setisLoading(false);
    }
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};
export default useFetch;
