
import { useEffect,useState } from 'react';
import axios from 'axios';
import moment from 'moment';
 const Covid = () => {
     const [dataCovid, setdataCovid]= useState([]);
     //= componentDidMount()
     useEffect(async()=>{
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-03-13T00%3A00%3A00Z&to=2022-03-15T00%3A00%3A00Z')
        let data=res&&res.data?res.data:[];
        if (data&&data.length>0){
            data.map(item=>{
                item.Date=moment(item.Date).format('DD/MM/YYYY')
                return item;
            })
        }
        setdataCovid(data);
        console.log('check res', res)
     },[]);
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
          {dataCovid && dataCovid.length>0 &&
          dataCovid.map(item=>{
              return(
                <tr key={item.ID}>
                    <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
              </tr>
              )
          })}
     
      </tbody>
  </table>
  )
}
export default Covid;
