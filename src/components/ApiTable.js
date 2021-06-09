import React from 'react';
import axios from 'axios';
import { Table } from "semantic-ui-react";
import TableSevenDaysCheckPosNeg from './TableSevenDaysCheckPosNeg';
import TableOneDayCheckPosNeg from './TableOneDayCheckPosNeg';

export default class ApiTable extends React.Component {
  state = {
    setAllData:[],
  }


  componentDidMount() {
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
      // react on errors.
      console.error(errors);
    });

    console.log(this.state.setAllData);

}



  render() {
    return (
        <>
        <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>24 HR</Table.HeaderCell>
            <Table.HeaderCell>7 Days</Table.HeaderCell>
            <Table.HeaderCell>Market Cap</Table.HeaderCell>
            <Table.HeaderCell>Coins Limit</Table.HeaderCell>
            <Table.HeaderCell>Coins Update</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>News Trend</Table.HeaderCell>
            <Table.HeaderCell>Our View</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        
          {this.state.setAllData.map(a1 => {
            return (
                <Table.Row>
                <Table.Cell>{a1.coinname}</Table.Cell>
                <Table.Cell>{a1.price}</Table.Cell>
                <Table.Cell><TableOneDayCheckPosNeg change24h={a1.change24h}></TableOneDayCheckPosNeg></Table.Cell>
                <Table.Cell><TableSevenDaysCheckPosNeg change7d={a1.change7d}></TableSevenDaysCheckPosNeg></Table.Cell>
                <Table.Cell>{a1.marketcap}</Table.Cell>
                <Table.Cell>{a1.coinlimit}</Table.Cell>
                </Table.Row>
            );
          })}
        
        </Table.Body>
      </Table>
      </>
    )
  }
}