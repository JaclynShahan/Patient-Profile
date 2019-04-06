import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import { Divider } from 'antd';

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
      arrayOfObjects: [
        {
          patientId: '653982',
          firstName: 'Marley',
          lastName: 'Foster',
          doctor: 'Brown',
          insurance: 'Cigna',
          amountOwed: '$20.00',
          charges: [
            {
              date: '4/5/2019',
              charges: '$283.00',
              amountDue: '$20.00',
              amountPaid: '$20.00',
              amountOwed: '$0.00'
            }
          ]
        }
      ]
    }
  }
    onDelete = (deletedIndex) => {
      let tempArray= this.state.arrayOfObjects
      tempArray.splice(deletedIndex, 1)
      this.setState({arrayOfObjects: tempArray})
    }

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
      let tempArr = this.state.arrayOfObjects;
      e.preventDefault();
      const userObject = {
        patientId: this.state.patientId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        doctor: this.state.doctor,
        insurance: this.state.insurance,
        amountOwed: this.state.amountOwed,
        charges: []
      }
      tempArr.push(userObject);
      this.setState({arrayOfObjects: tempArr})
      this.onClear()
    }
  
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
        stuff={this.state.arrayOfObjects}
      />
      </div>
    );
  }
}

export default App;
