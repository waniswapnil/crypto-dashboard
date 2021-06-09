import React, { useEffect, useState } from 'react';
import imgup from "../assets/img/icons/up.png"
import imgdown from "../assets/img/icons/down.png"

export const TableOneDayCheckPosNeg = (props) => {
    const onedaycheck = props.change24h;
    if (onedaycheck>=0) {
     return (<p className="text-white text-left">
      <img src={imgup} alt=""/>
      <span className="text-success text-left">{onedaycheck}%</span>
      </p>);
    }else{
      return (<p className="text-white text-left">
      <img src={imgdown} alt=""/>
      <span className="text-danger text-left">{onedaycheck}%</span>
      </p>); 
    }
  }

export default TableOneDayCheckPosNeg;