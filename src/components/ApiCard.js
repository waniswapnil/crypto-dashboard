import React from 'react';
import axios from 'axios';
import Trend from 'react-trend';
import SevenDaysCheckPosNeg from './SevenDaysCheckPosNeg';
import OneDayCheckPosNeg from './OneDayCheckPosNeg';
import { AnimationWrapper } from 'react-hover-animation'
import imgbitcoin from "../assets/img/icons/bitcoin.png"


export default class ApiCard extends React.Component {

  state = {
    setAllData:[],
  }


  componentDidMount() {
    const getApiData = () => {
        axios.all([axios.get("https://xo64bkek03.execute-api.ap-south-1.amazonaws.com/dev"), 
        axios.get("https://wujkxodbqi.execute-api.ap-south-1.amazonaws.com/dev"),
        axios.get("https://ur331c2b6d.execute-api.ap-south-1.amazonaws.com/dev")])
        .then(
          axios.spread((...responses) => {
            const api1 = responses[0].data;
            const api2 = responses[1].data;
            const api3 = responses[2].data;
            
            const f1 = api1.map(t1 => ({...t1, ...api2.find(t2 => t2.id === t1.id)}))
            const setAllData = f1.map(t1 => ({...t1, ...api3.find(t2 => t2.id === t1.id)}))
    
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
<div className="row">

{this.state.setAllData && this.state.setAllData.map((data)=>{
    const { exchange, currency, id, coinname, coinlimit, price, marketcap, change7d ,change24h} = data;

    return(<>
        
    
            <div className="col-sm-6">
            <AnimationWrapper>
						<div className="card" style={{borderRadius: '25px', backgroundColor:"#3b3363"}}>
							<div className="row">
                <div className="col">
                <div className="card-body text-center">
							<img  src={imgbitcoin} alt="logo"/><p></p>
              <h2 className="h2 text-white font-weight-bold">{coinname}
              <br/>(BTC)</h2>
							<h2><i className="fa fa-spinner fa-spin">${price}</i></h2>
                
                <OneDayCheckPosNeg change24h={change24h}/>
                <SevenDaysCheckPosNeg change7d={change7d}/>

							</div>
                </div>
                <div className="col">
                <div className="card-body text-center">

                <h3 className="text-white">Market Cap <span>${marketcap}</span> </h3>
              

                <Trend data={[0, 10, 5, 22, 3.6, 11]}
                    autoDraw
                    smooth radius={20}
                    width={180}
                    height={120}
                    gradient={['#0FF', '#F0F']}
                    strokeWidth={4}
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in" />

                <h3 className="text-white mb-2 font-w600"> Curr Supply <span>$673904</span> </h3>

                <h3 className="text-white mb-2 font-w600"> Max Supply <span>$673904</span> </h3>

							</div>
                </div>
              </div>
						</div>
            </AnimationWrapper>
					</div>
    </>);
  })}
</div>
      </>
    )    
}
}