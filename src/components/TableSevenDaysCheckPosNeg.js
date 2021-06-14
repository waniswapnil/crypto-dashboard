import React, { useEffect, useState } from 'react';
import imgup from "../assets/img/icons/up.png"
import imgdown from "../assets/img/icons/down.png"
import { CompareSharp } from '@material-ui/icons';

export const TableSevenDaysCheckPosNeg = (props) => {
    const sd = props.change7d;
    if (sd>=0) {
     return (<p  className="text-white text-left font-weight-bold" >
      <img src={imgup} alt=""/>
      <span className="text-success text-left font-weight-bold">{sd}%</span>
      </p>);
    }else{
      return (<p className="text-white text-left font-weight-bold">
      <img src={imgdown} alt=""/>
      <span className="text-danger text-left font-weight-bold">{sd}%</span>
      </p>); 
    }
  }

export default TableSevenDaysCheckPosNeg;