import React, { Component } from 'react';
import Modal from './Modal.js';
import { Button, Icon, Popconfirm } from 'antd';
import Axios from 'axios';
import Exercises from './Exercises.js';

class Table extends Component {
    constructor() {
        super()
        this.state = {
            charges: [ {
              
            }]
            
        }
    }
    componentDidMount = () => {
        Axios.get(`/api/getCharges`).then((resp) => {console.log(resp)
       this.setState({charges: resp.data})
        })
      }

     
 
    //   addCharge = (e) => {

    //     e.preventDefault()
    //     Axios.post('/api/addCharge',  {
    //        charges: { 
    //         date: this.state.date,
    //         charge: this.state.charges,
    //         amountDue: this.state.amountDue,
    //         amountPaid: this.state.amountPaid,
    //         amountOwed: this.state.amountOwed,
    //        }
    //     }).then((resp) => {
    //       this.onClear()
    //       console.log(resp)
    //     this.setState({charges: resp.data})
    //     })
  
    //   }
    onDelete = (i) => {
        Axios.delete(`/api/deleteCharge/${i}`).then((resp) => {console.log(resp)
        this.setState({charges: resp.data})
        })
      }




    render() {
        const tableRows= this.props.users.map((person, indexPoint) => {
            return(
                <tr key={indexPoint}>
                <Popconfirm onConfirm={()=> this.props.onDelete(person.id)} title='Are you sure?'>
                <td><Button><Icon className="iconTrash" type="delete"/></Button></td>
                </Popconfirm>
                <td>{person.patientId}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.doctor}</td>
                <td>{person.insurance}</td>
                <td>{person.amountOwed}</td>
                <td><Modal 
                patientIndex={indexPoint}
                onDelete={this.onDelete}
                chargeInfo={person.charges}
                addCharges={this.props.addCharges}
                /></td>
                <td><Exercises /></td>
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