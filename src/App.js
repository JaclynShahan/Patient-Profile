import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import { Divider } from 'antd';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      patientId: '',
      firstName: '',
      lastName: '',
      doctor: '',
      insurance: '',
      amountOwed: '',
      patients: []
    }
  }
  componentDidMount = () => {
    Axios.get(`/api/getPatients`).then((resp) => {console.log(resp)
   this.setState({patients: resp.data})
    })
  }
    onDelete = (i) => {
      Axios.delete(`/api/deletePatient/${i}`).then((resp) => {console.log(resp)
      this.setState({patients: resp.data})
      })
    }
     // let tempArray= this.state.patients
      //tempArray.splice(deletedIndex, 1)
      //this.setState({patients: tempArray})
    

    onClear = () => {
      this.setState({
        patientId: '',
        firstName: '',
        lastName: '',
        doctor: '',
        insurance: '',
        amountOwed: '',

      })
    }
    
    textChangeHandler = (e, stateProperty) => {
      this.setState({[stateProperty]: e.target.value})
    }

    addUser = (e) => {

      e.preventDefault()
      Axios.post('/api/addPatient', {
         patient: { 
          patientId: this.state.patientId,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          doctor: this.state.doctor,
          insurance: this.state.insurance,
          amountOwed: this.state.amountOwed
         }
      }).then((resp) => {
        this.onClear()
        console.log(resp)
      this.setState({patients: resp.data})
      })

    }
      // let tempArr = this.state.patients;
      // e.preventDefault();
      // const userObject = {
      //   patientId: this.state.patientId,
      //   firstName: this.state.firstName,
      //   lastName: this.state.lastName,
      //   doctor: this.state.doctor,
      //   insurance: this.state.insurance,
      //   amountOwed: this.state.amountOwed,
      //   charges: []
      // }
      // tempArr.push(userObject);
      // this.setState({patients: tempArr})
      // this.onClear()
    
  
  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => this.addUser(e)}>
      <input
      className='inputWidths'
      value={this.state.patientId}
      placeholder='Patient ID'
      onChange={e => this.textChangeHandler(e, 'patientId')}
      />
      <input
      className='inputWidths'
      value={this.state.firstName}
      placeholder='First Name'
      onChange={e => this.textChangeHandler(e, 'firstName')}
      />
      <input 
      className='inputWidths'
      value={this.state.lastName}
      placeholder='Last Name'
      onChange={e => this.textChangeHandler(e, 'lastName')}
      />
      <input
      className='inputWidths'
      value={this.state.doctor}
      placeholder='Doctor'
      onChange={e => this.textChangeHandler(e, 'doctor')}
      />
      <input 
      className='inputWidths'
      value={this.state.insurance}
      placeholder='Insurance'
      onChange={e => this.textChangeHandler(e, 'insurance')}
      />
      <input
      className='inputWidths'
      value={this.state.amountOwed}
      placeholder='Amount Owed'
      onChange={e => this.textChangeHandler(e, 'amountOwed')}
      />
    <button type='submit'>SUBMIT</button>

      </form>
      <Divider />
      <Table 
        onDelete={this.onDelete}
        stuff={this.state.patients}
      />
      </div>
    );
  }
}

export default App;
