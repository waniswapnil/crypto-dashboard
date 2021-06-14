import React, { useEffect, useState } from 'react';
import imgup from "../assets/img/icons/up.png"
import imgdown from "../assets/img/icons/down.png"

export const CardCoinLimitCheck = (props) => {
    const coinlimitck = props.coinlimit;
    if (coinlimitck<=0) {
     return (<p className="text-white text-left font-weight-bold">
      Coin Limit: Unlimited
      </p>);
    }else{
      return (<p className="text-white text-left font-weight-bold">
    Coin Limit: {coinlimitck}
      </p>); 
    }
  }

export default CardCoinLimitCheck;