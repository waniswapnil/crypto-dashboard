import React from 'react';
import axios from 'axios';
import Trend from 'react-trend';
import SevenDaysCheckPosNeg from './SevenDaysCheckPosNeg';
import OneDayCheckPosNeg from './OneDayCheckPosNeg';
import { AnimationWrapper } from 'react-hover-animation'
import imgbitcoin from "../assets/img/icons/bitcoin.png"
import TableCoinLimitCheck from './TableCoinLimitCheck';
import CardCoinLimitCheck from './CardCoinLimitCheck';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';


export default class CardTable extends React.Component {

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
  
      setInterval(getApiData(),60000);

}




  render() {
    return (
        <>


{this.state.setAllData && this.state.setAllData.map((data)=>{
    const { exchange, currency, id, coinname, coinlimit, price, marketcap, change7d ,change24h} = data;

    return(
      
      <div className="mycard">
      <div class="row">
  <div class="span12">
        {/* <div className="container" style={{borderRadius: '25px'}}> */}
      <AnimationWrapper>
<Table>
<tr>
<td>
                <div className="img-container text-center">
                <img src={imgbitcoin} alt="logo"/>
                <h4 className="h4 text-white font-weight-bold text-center">{coinname}<br/>(BTC)</h4>
                <h4 className="h4 text-white font-weight-bold text-center">Price: ${price}</h4>
              </div>
              </td>


              <td>
                  <h4 className="h4 text-white font-weight-bold">Market Cap: {(marketcap/1000000).toFixed(2)} M</h4>
                  <h4 className="h4 text-white font-weight-bold"><CardCoinLimitCheck coinlimit={coinlimit}/></h4>
                  <h4 className="h4 text-white font-weight-bold">Rating: 5</h4>
              </td>

              <td>
                  <h4 className="h4 text-white font-weight-bold">Social View: Neutral</h4>
                  <OneDayCheckPosNeg change24h={change24h}/>
                  <SevenDaysCheckPosNeg change7d={change7d}/>
              </td>
              
</tr>
</Table>  
					</AnimationWrapper>
                              </div>
                              </div>
                              </div>
                     
  );
    
  })}

      </>
    )    
}
}