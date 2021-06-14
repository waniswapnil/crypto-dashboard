import React, { useEffect, useState } from 'react';
import imgup from "../assets/img/icons/up.png"
import imgdown from "../assets/img/icons/down.png"
import { CompareSharp } from '@material-ui/icons';

export const OneDayCheckPosNeg = (props) => {
  const onedaycheck = props.change24h;
  if (onedaycheck>=0) {
   return (<p className="h4 text-white text-left font-weight-bold">
    <img src={imgup} alt=""/>
    <span className="text-success text-left font-weight-bold">{onedaycheck}%</span> in 24 hours
    </p>);
  }else{
    return (<p className="h4 text-white text-left font-weight-bold">
    <img src={imgdown} alt=""/>
    <span className="text-danger text-left font-weight-bold">{onedaycheck}%</span> in 24 hours
    </p>); 
  }
}

export default OneDayCheckPosNeg;