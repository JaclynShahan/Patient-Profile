import React, { Component } from 'react';
import Modal from './Modal.js';
import { Button, Icon, Popconfirm } from 'antd';

class Table extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
 

    render() {
        const tableRows= this.props.stuff.map((here, indexPoint) => {
            return(
                <tr key={indexPoint}>
                <Popconfirm onConfirm={()=> this.props.onDelete(here.id)} title='Are you sure?'>
                <td><Button><Icon type="delete"/></Button></td>
                </Popconfirm>
                <td>{here.patientId}</td>
                <td>{here.firstName}</td>
                <td>{here.lastName}</td>
                <td>{here.doctor}</td>
                <td>{here.insurance}</td>
                <td>{here.amountOwed}</td>
                <td><Modal /></td>
                <td><Button><Icon type="folder"/></Button></td>
                </tr>
            )}
                 
            
        )
        return(
           <table className='tableWidth'>
               <tbody>
                   <tr className='headers'>
                       <th>Delete</th>
                       <th>Patient ID</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Doctor</th>
                       <th>Insurance</th>
                       <th>Amount Owed</th>
                       <th>Charges</th>
                       <th>Exercises</th>
                   </tr>
                   {tableRows}
               </tbody>
           </table>
        )
    }
}

export default Table;