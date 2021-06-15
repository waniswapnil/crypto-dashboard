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
    <div className="container" style={{width:"100%",margin:"auto", borderRadius:"20px"}}>
      <div className="row">
        <div className="col logo-img" > <img src={imgbitcoin} alt="logo"/></div>
        <div className="col"><p>{coinname}<br/>(BTC)</p></div>
        <div className="col"><p>Price <br/>${price}</p></div>
      </div>
      <div className="row">
        <div className="col"><p>Social View Neutral</p></div>
        <div className="col"><CardCoinLimitCheck coinlimit={coinlimit}/></div>
        <div className="col"><p>Market Cap {(marketcap/1000000).toFixed(2)} M</p></div>
      </div>
      <div className="row">
        <div className="col"><p>24hr <br/> <OneDayCheckPosNeg change24h={change24h}/></p></div>
        <div className="col"><p>7d <br/><SevenDaysCheckPosNeg change7d={change7d}/></p> </div>
        <div className="col"><p>Rating <br/> 5</p></div>
      </div>
    </div>
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
