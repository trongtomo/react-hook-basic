import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [loading, setLoading] = useState(true);
  const [dataCovid, setdataCovid] = useState([]);
  //= componentDidMount()
  useEffect(async () => {
    setTimeout(async () => {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2022-03-13T00%3A00%3A00Z&to=2022-03-17T00%3A00%3A00Z"
      );
      // res && res.data la dieu kien ? tra ve true : tra ve false
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
        data = data.reverse();
      }
      setdataCovid(data);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <table id="customers">
      {console.log("data Covid", dataCovid)}
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {loading === false &&
          dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
              </tr>
            );
          })}
        {loading === true && (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Covid;
