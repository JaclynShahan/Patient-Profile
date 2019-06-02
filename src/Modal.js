import React, { Component } from 'react'
import { Button, Modal as AntModal, Icon } from 'antd'
import Axios from 'axios'

class Modal extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
      date: '',
      charge: '',
      amountDue: '',
      amountPaid: '',
      amountOwed: ''
    }
  }
  onClear = () => {
    this.setState({
      date: '',
      charge: '',
      amountDue: '',
      amountPaid: '',
      amountOwed: ''
    })
  }

  onOk = () => {
    var charge = {
      date: this.state.date,
      charge: this.state.charge,
      amountDue: this.state.amountDue,
      amountPaid: this.state.amountPaid,
      amountOwed: this.state.amountOwed
    }
    this.props.addCharges(this.props.patientIndex, charge)
    this.setState({ visible: false })
    this.onClear()
  }
  onCancel = () => {
    this.setState({ visible: false })
  }
  handleCharge = (e, stateProperty) => {
    this.setState({ [stateProperty]: e.target.value })
  }

  render () {
    const bodyStyle = {
      height: '50vh'
    }
    const modalRows = this.props.chargeInfo.map((day, chargeIndex) => {
      return (
        <tr key={chargeIndex}>
          <td>{day.date}</td>
          <td>{day.charge}</td>
          <td>{day.amountDue}</td>
          <td>{day.amountPaid}</td>
          <td>{day.amountOwed}</td>
        </tr>
      )
    })
    return (
      <div>
        <Button onClick={() => this.setState({ visible: true })}>
          <Icon className='iconDollar' type='dollar' />
        </Button>
        <AntModal
          width='90vw'
          bodystyle={bodyStyle}
          okText={
            <span>
              OK <Icon type='check' />
            </span>
          }
          onOk={this.onOk}
          onCancel={this.onCancel}
          cancelText={
            <span>
              CLOSE <Icon type='stop' />
            </span>
          }
          visible={this.state.visible}
        >
          <table className='modalWidth, chargeTable'>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Charge</th>
                <th>Amount Due</th>
                <th>Amount Paid</th>
                <th>Amount Owed</th>
              </tr>
              <tr>
                <td>
                  <input
                    className='chargeStyles'
                    value={this.state.date}
                    placeholder='Date'
                    onChange={e => this.handleCharge(e, 'date')}
                  />
                </td>
                <td>
                  <input
                    className='chargeStyles'
                    value={this.state.charge}
                    placeholder='Charges'
                    onChange={e => this.handleCharge(e, 'charge')}
                  />
                </td>
                <td>
                  <input
                    className='chargeStyles'
                    value={this.state.amountDue}
                    placeholder='Amount Due'
                    onChange={e => this.handleCharge(e, 'amountDue')}
                  />
                </td>
                <td>
                  <input
                    className='chargeStyles'
                    value={this.state.amountPaid}
                    placeholder='Amount Paid'
                    onChange={e => this.handleCharge(e, 'amountPaid')}
                  />
                </td>
                <td>
                  <input
                    className='chargeStyles'
                    value={this.state.amountOwed}
                    placeholder='Amount Owed'
                    onChange={e => this.handleCharge(e, 'amountOwed')}
                  />
                </td>
              </tr>
              {modalRows}
            </tbody>
          </table>
        </AntModal>
      </div>
    )
  }
}

export default Modal
