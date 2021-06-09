import React, { useEffect, useState } from 'react';
import Trend from 'react-trend';
import axios from "axios";
import { Chart } from 'react-charts'
import imgbitcoin from "../assets/img/icons/bitcoin.png"
import imgup from "../assets/img/icons/up.png"
import imgdown from "../assets/img/icons/down.png"
import { AnimationWrapper } from 'react-hover-animation'
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import OneDayCheckPosNeg from './OneDayCheckPosNeg';
import SevenDaysCheckPosNeg from './SevenDaysCheckPosNeg';
import Bonds from './Bonds';
import Details from './Details';
import StickyHeadTable from './MTable';
import ApiTable from './ApiTable';


export const Orders = () => {
    
  const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "price",
     label: "Price",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "changein24",
     label: "% in 24h",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "changein7",
      label: "% in 7D",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "marketcap",
      label: "Market Cap",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "coinslimit",
      label: "Coins Limit",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "codeupdate",
      label: "Code Update",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "country",
      label: "Country",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "influencetrend",
      label: "Influence Trend",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "newstrend",
      label: "News Trend",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "ourview",
      label: "Our View",
        sortable: true,

     },
   ];
   
   const columns1 = [
    {
     name: "name",
     selector: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "price",
     selector: "Price",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "changein24",
     selector: "% in 24h",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "changein7",
      selector: "% in 7D",
    sortable: true,

     },
     {
      name: "marketcap",
      selector: "Market Cap",
    sortable: true,

     },
     {
      name: "coinslimit",
      selector: "Coins Limit",
    sortable: true,

     },
     {
      name: "codeupdate",
      selector: "Code Update",
    sortable: true,

     },
     {
      name: "country",
      selector: "Country",
    sortable: true,

     },
     {
      name: "influencetrend",
      selector: "Influence Trend",
        sortable: true,

     },
     {
      name: "newstrend",
      selector: "News Trend",
    sortable: true,

     },
     {
      name: "ourview",
      selector: "Our View",
        sortable: true,

     },
   ];

   const data1 = [
    { name: "BitCoin (BTC)", price: "$6582415", changein24:"45%", changein7:"10%", marketcap: "$673904", coinslimit: "$43904", codeupdate:"$1.58 B", country:"$1.58 B", influencetrend:"$1.58 B", newstrend:"$1.58 B",ourview:"$1.58 B"},
    { name: "Ethreum (ETC)", price: "$6582415", changein24:"25%", changein7:"20%", marketcap: "$573904", coinslimit: "$873904", codeupdate:"$1.58 B", country:"$3.58 B", influencetrend:"$1.58 B", newstrend:"$1.58 B",ourview:"$1.58 B"},
    { name: "CoinBase (CB)", price: "$5682415", changein24:"85%", changein7:"5%", marketcap: "$773904", coinslimit: "$73904", codeupdate:"$1.58 B", country:"$2.58 B", influencetrend:"$1.58 B", newstrend:"$1.58 B",ourview:"$1.58 B" },
    { name: "DodgeCoin (DC)", price: "$3582415", changein24:"5%", changein7:"47%", marketcap: "$473904", coinslimit: "$573904", codeupdate:"$1.58 B", country:"$1.58 B",influencetrend:"$1.58 B", newstrend:"$1.58 B",ourview:"$1.58 B"},
   ];
   
   const options = {
    print: false,
    download: false,
    customToolbar: null,
    responsive: 'vertical',
    selectableRows: "none",
    displayRowCheckbox:false,


   };

const [data,setData] = useState();

const url = "https://xo64bkek03.execute-api.ap-south-1.amazonaws.com/dev";
useEffect(()=>{
  axios.get(url).then((res) => {
    const response = res.data;
    setData(response);
  }).catch(error => console.log(error));
},[]);
console.log(data);


return (
  <div className="container">
  <br/>

<div className="row">
{data && data.map((data)=>{
    const { exchange, currency, id, coinname, coinlimit } = data;
    return(<>
            <div className="col-sm-6">
            <AnimationWrapper>
						<div className="card" style={{borderRadius: '25px', backgroundColor:"#3b3363"}}>
							<div className="row">
                <div className="col">
                <div className="card-body text-center">
							<img  src={imgbitcoin} alt="logo"/><p></p>
              <h2 className="h2 text-white">{coinname}
              <br/>(BTC)</h2>
							<h2><i className="fa fa-spinner fa-spin">$55525</i></h2>
                
                <OneDayCheckPosNeg coinlimit={coinlimit}/>
                <SevenDaysCheckPosNeg coinlimit={coinlimit}/>

							</div>
                </div>
                <div className="col">
                <div className="card-body text-center">

                <h3 className="text-white">Market Cap <span>$673904</span> </h3>
              

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

<Bonds   data={data1}
  columns={columns}
  options={options}
/>
<br/>

<Details   data={data1}
  columns={columns1}
/>
<br/>

<ApiTable/>
<StickyHeadTable/>

<br/>

		</div>
);
};


export default Orders;