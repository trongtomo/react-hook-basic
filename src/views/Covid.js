import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";

const Covid = () => {
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    "https://api.covid19api.com/country/vietnam?from=2022-03-13T00%3A00%3A00Z&to=2022-03-17T00%3A00%3A00Z"
  );
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
        {isError === false &&
          isLoading === false &&
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
        {isLoading === true && (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
        {isError === true && (
          <tr>
            <td colSpan="5">Sumting wrong</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Covid;
