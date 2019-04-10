import React, { Component } from 'react';
import { Button, Modal as AntModal, Icon} from 'antd';

class Modal extends Component {
    constructor() {
        super()
        this.state= {
            visible: false,
        }
    }
    onOk = () => {
        this.setState({visible: false});
    }
    onCancel = () => {
        this.setState({visible: false});
    }

    render() {
        const bodyStyle = {
            height: '50vh'
        }
        const modalRows= this.props.chargeInfo.map((day, chargeIndex) => {
            return(
                <tr key={chargeIndex}>
                <td>{day.date}</td>
                <td>{day.charge}</td>
                <td>{day.amountDue}</td>
                <td>{day.amountPaid}</td>
                <td>{day.amountOwed}</td>

                </tr>
            )
        })
    return(
        <div>
            <Button onClick={() => this.setState({visible: true})}><Icon type="dollar"/></Button>
            <AntModal
            width='90vw'
            bodystyle={bodyStyle}
            okText= {<span>OK <Icon type="check"/></span>}
            onOk={this.onOk}
            onCancel={this.onCancel}
            cancelText= {<span>CLOSE <Icon type="stop"/></span>}
            visible={this.state.visible}>
            <table className="modalWidth">
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
                        // value={day.date}
                         placeholder='Date'
                        // onChange={e => this.props.addCharge(e, 'date')}
                        
                        />
                    </td>
                    <td>
                        <input
                           //value={day.charge}
                           placeholder='Charges'
                          // onChange={e => this.props.addCharge(e, 'charge')}
                        />
                    </td>
                    <td>
                        <input
                           //value={day.amountDue}
                           placeholder='Amount Due'
                           //onChange={e => this.props.addCharge(e, 'amountDue')}
                        />
                    </td>
                    <td>
                        <input
                          // value={day.amountPaid}
                           placeholder='Amount Paid'
                          // onChange={e => this.props.addCharge(e, 'amountPaid')}
                        />
                    </td>
                    <td>
                        <input
                           //value={day.amountOwed}
                           placeholder='Amount Owed'
                           //onChange={e => this.props.addCharge(e, 'amountOwed')}
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

export default Modal;