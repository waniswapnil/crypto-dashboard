import React from 'react';
import axios from 'axios';
import TableSevenDaysCheckPosNeg from './TableSevenDaysCheckPosNeg';
import TableOneDayCheckPosNeg from './TableOneDayCheckPosNeg';
import imgbitcoin from "../assets/img/icons/bitcoin.png"
import Trend from 'react-trend';
// import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import TableCoinLimitCheck from './TableCoinLimitCheck';

export default class ApiTable extends React.Component {
  state = {
    setAllData:[],
  }


  componentDidMount() {

   const getApiData = () => {
        axios.all([axios.get("https://xo64bkek03.execute-api.ap-south-1.amazonaws.com/dev"), 
        axios.get("https://wujkxodbqi.execute-api.ap-south-1.amazonaws.com/dev"),
        axios.get("https://ur331c2b6d.execute-api.ap-south-1.amazonaws.com/dev"),
        axios.get("https://o5o4ditir9.execute-api.ap-south-1.amazonaws.com/dev")
      ])
        .then(
          axios.spread((...responses) => {
            const api1 = responses[0].data;
            const api2 = responses[1].data;
            const api3 = responses[2].data;
            const api4 = responses[3].data;
            
            const f1 = api1.map(t1 => ({...t1, ...api2.find(t2 => t2.id === t1.id)}))
            const f2 = f1.map(t1 => ({...t1, ...api3.find(t2 => t2.id === t1.id)}))
            const setAllData = f2.map(t1 => ({...t1, ...api4.find(t2 => t2.id === t1.id)}))
    
            this.setState({ setAllData });
  
        })
      )
      .catch((errors) => {

        console.error(errors);
      });
  
      console.log(this.state.setAllData);
    };
      
    

      getApiData();

    this.interval=setInterval(getApiData(),6000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

  render() {
    return (
      <>
       <Table className="mytable " responsive>
      <thead>
                                          <tr>
                                            <th><p className="h4 text-white text-left font-weight-bold">Crypto</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Name</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Price</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Market Cap</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Change in 24 HR (%)</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Change in 7 Days (%)</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">7 Days Trend</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Category</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Domain</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Social View</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Code Activity</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Coin Limit</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Our Rating</p></th>
                                            <th><p className="h4 text-white text-left font-weight-bold">Country of Origin</p></th>
                                          </tr>
                                     </thead>
                                     <tbody>
                                            {this.state.setAllData.map(a1 => {
            return (
                                                <tr>

                                                <td>
                                               
                                                <div className="img-container">
                                             <img  src={imgbitcoin} style={{width:"50px", height:"50px", display: 'flex',  justifyContent:'center', alignItems:'center'}} alt="logo"/>
                                             </div>
                                             
                                      
                                                </td>

                                                <td>
                                                <p className="text-white text-left font-weight-bold">
                                                {a1.coinname}<br/>
                                                (BTC)</p>
                                                </td>

                                                    <td>
                                                    <span class="badge badge-danger">
                                                    <p className="text-white text-left font-weight-bold">
                                                    {a1.price} {a1.currency}
                                                    </p>
                                                    </span>
                                                    </td>

                                                    <td>
                                                    <p className="text-white text-left font-weight-bold">
                                                   {(a1.marketcap/1000000).toFixed(2)} M
                                                   </p>
                                                    </td>

<td>
<div className="img-container">
  <TableOneDayCheckPosNeg change24h={a1.change24h}/>
  </div>
</td>

<td>
<div className="img-container">
  <TableSevenDaysCheckPosNeg change7d={a1.change7d}/>
  </div>
</td>

<td>
<Trend data={a1.prices}
                 autoDraw
                 smooth radius={20}
                 width={140}
                  height={80}
                  gradient={['#0FF', '#F0F']}
                  strokeWidth={4}
  autoDrawDuration={3000}
  autoDrawEasing="ease-in" />
</td>

                                                 


                                                    <td>
                                                    <p className="text-white text-left font-weight-bold">
                                                       Coin
                                                       </p>
                                                    </td>

                                                    <td>
                                                    <p className="text-white text-left font-weight-bold">
                                                        Domain
                                                        </p>
                                                    </td>

                                                    <td>
                                                    <p className="text-white text-left font-weight-bold">
                                                    trend
                                                    </p>
                                                    </td>

                                                    <td>
                                                    <p className="text-white text-left font-weight-bold">
                                                    activity
                                                    </p></td>

                                                    <td>
                                                    <TableCoinLimitCheck coinlimit={a1.coinlimit}/>
                                                    </td>
                                                  
                                                   <td>
                                                   <p className="text-white text-left font-weight-bold">
                                                   5
                                                   </p>
                                                   </td>

                                                   <td>
                                                   <p className="text-white text-left font-weight-bold">
                                                   US
                                                   </p>
                                                   </td>
                                                </tr>
                                                
                                               
                                                );
          })}
                                          </tbody>
                                          </Table>
                                    
      </>
    )
  }
}