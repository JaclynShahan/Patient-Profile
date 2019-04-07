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

    return(
        <div>
            <Button onClick={() => this.setState({visible: true})}><Icon type="dollar"/></Button>
            <AntModal
            width='80vw'
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
                    <th>Charges</th>
                    <th>Amount Due</th>
                    <th>Amount Paid</th>
                    <th>Amount Owed</th>
                </tr>
                <tr>
                    <td>
                        <input></input>
                    </td>
                    <td>
                        <input></input>
                    </td>
                    <td>
                        <input></input>
                    </td>
                    <td>
                        <input></input>
                    </td>
                    <td>
                        <input></input>
                    </td>
                </tr>
            </tbody>
            </table>
            </AntModal>
        </div>
    )
    }
    
}

export default Modal;